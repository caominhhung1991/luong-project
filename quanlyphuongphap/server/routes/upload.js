var express = require('express');
var router = express.Router();
var multer = require('multer');
var fs = require('fs');
var mkdirp = require('mkdirp');
const dir = '../upload/';

var storage = multer.diskStorage({
	destination: function(req, file, cb) {
		console.log(dir);
		console.log(file)
		try {
			if(!fs.existsSync(dir+file.fieldname)) {
				mkdirp(dir+file.fieldname);
				setTimeout(()=> {
					cb(null, `../upload/${file.fieldname}`)
				},1000)
			} else {
				cb(null, `../upload/${file.fieldname}`)
			}
		} catch(err) {
			console.log(err);
		}
	},
	filename: function(req, file, cb) {
		cb(null, file.originalname)
	}
})

var upload = multer({storage: storage});
// router.get

router.post('/photos', upload.any(), function (req, res, next) {
	res.send(req.files);
})

// router.post('/doc', upload.any(), function (req, res, next) {
// 	console.log('API upload photos');
// 	res.send(req.files);
// })

module.exports = router;
