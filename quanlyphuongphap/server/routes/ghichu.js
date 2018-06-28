const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectId;

var url = "mongodb://localhost:27017/quanlycongthuc";

// Connect
const connection = (closure) => {
    return MongoClient.connect(url, (err, db) => {
        if (err) return console.log(err);
        closure(db);
    })
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200, data: [], message: null
}

/**  BÁO LỖI
 * - thêm lỗi từ trang chính (POST)
 * - lấy tất cả báo lỗi hiển thị trang admin (GET)
 * - id method - id baoloi - ngay tao
 * - user name - content - email
 */
router.get('/baoloi', (req, res, next) => {
    connection((db) => {
        db.collection("baoloi")
            .find().toArray()
            .then((baoloi) => {
                response.data = baoloi;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

router.post('/baoloi', (req, res, next) => {
    let baoloi = req.body;
    let query = { _id: new ObjectID(baoloi.method_id) };
    connection((db) => {
        db.collection("method")
            .find(query).toArray()
            .then((method) => {
                // console.log(method);
                let tam = method[0];
                tam.comments.push(baoloi);
                db.collection("method")
                    .update({ _id: new ObjectID(tam._id) }, tam, { save: true });
            })

        db.collection('baoloi')
            .save(baoloi, (err, baoloi) => {
                if (err) { res.send(err); }
                response.data = baoloi;
                res.json(response);
            });
    });


});

router.delete('/baoloi/:id', (req, res, next) => {
    let request = { _id: new ObjectID(req.params.id) }
    connection((db) => {
        db.collection('baoloi')
            .remove(request, (err, baoloi) => {
                if (err) {
                    res.send(err);
                }
                res.json(baoloi);
            })
    });
});

/** CÔNG THỨC
 * - query công thức theo pp/ ct, môn, lớp/chuyên đề, lớp, chương, bài
 * - query cây ví dụ như: môn, lớp/ chuyên đề, lớp, chương, bài
 */
router.get('/:id', (req, res, next) => {
    let request = { '_id': new ObjectID(req.params.id) };
    console.log(request);
    connection((db) => {
        db.collection("method")
            .find(request).toArray()
            .then((method) => {
                response.data = method;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

router.get('/method/:id', (req, res, next) => {
    console.log("get method by id include html/css")
    let request = { '_id': new ObjectID(req.params.id) };
    console.log(request);
    connection((db) => {
        db.collection("method")
            .find(request).toArray()
            .then((method) => {
                console.log(method)
                let title = method[0].title;
                let images = "";
                for (let image of method[0].images) {
                    images +=
                        `<div>
    <img class="ghichu-lythuyet-image" src="upload/hinh/${image}">
</div>`
                }

                let videos = "";
                for (let video of method[0].videos) {
                    videos +=
                        `<video class="ghichu-video" controls>
    <source src="upload/video/${video}" type="video/mp4">
    <source src="mov_bbb.ogg" type="video/ogg"> Your browser does not support HTML5 video.
</video>`
                }

                let result = `
<div id="ghichu">
    <h1 id="ghichu-title">${title}</h1>
    <div id="ghichu-lythuyet">
        <h4 class="ghichu-header-h4">Lý thuyết</h4>
        <div id="ghichu-lythuyet-images">
            ${images}
        </div>
    </div>

    <div id="ghichu-videos">
        <h4 class="ghichu-header-h4">Video giải thích</h4>
        <div id="ghichu-videos">
            ${videos}
        </div>
    </div>
</div>`
                response.data = result;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

router.get("/search/:text", (req, res, next) => {
    console.log(req.params.text)
    connection((db) => {
        db.collection("method")
            .find({ $text: { $search: req.params.text } }, { score: { $meta: "textScore" } })
            .sort({ score: { $meta: "textScore" } })
            .toArray()
            .then((methods) => {
                response.data = methods;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    })
});

router.get("/search/abc/:index", async (req, res, next) => {
    console.log(req.params.text)
    let c = await F();
    console.log(c);
});

function F() {
    if (true) {
        return new Promise.resolve({ fasd: "asdfsf " });
    } else {
        return new Promise.reject("Thong bao loi");
    }

}

module.exports = router;