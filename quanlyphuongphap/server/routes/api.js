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

// Method
// ---- Thêm một phương pháp vào mongodb ---
router.post('/method', (req, res, next) => {
	var method = req.body;
	// tam method._id = new ObjectID(method._id);
	console.log("add method api");
	connection((db) => {
		db.collection('method').save(method, (err, method) => {
			if (err) {
				res.send(err);
			}
			res.json(method);
		});
	});
})

router.post('/method_deleted', (req, res, next) => {
	var method = req.body;
	console.log("add method_deleted api");
	connection((db) => {
		db.collection('method_deleted').save(method, (err, method) => {
			if (err) {
				res.send(err);
			}
			res.json(method);
		});
	});
})

// v
router.get('/method', (req, res, next) => {
	// let query = { 'method': req.params.loai };
	console.log("get phuongphaps api");
	connection((db) => {
		db.collection('method')
			.find()
			.toArray()
			.then((methods) => {
				response.data = methods;
				res.json(response);
			})
			.catch((err) => {
				sendError(err, res);
			});
	});
})

// Tam TAM TAM TAM
router.get('/pp', (req, res, next) => {
	connection((db) => {
		db.collection('phuongphap')
			.find().toArray().then((methods) => {
				response.data = methods;
				res.json(response);
			}).catch((err) => {
				sendError(err, res);
			});
	});
})

router.get('/ct', (req, res, next) => {
	connection((db) => {
		db.collection('congthuc')
			.find().toArray().then((methods) => {
				response.data = methods;
				res.json(response);
			}).catch((err) => {
				sendError(err, res);
			});
	});
})

router.get('/method/:loai', (req, res, next) => {
	let query = { 'method': req.params.loai };
	console.log("get phuongphaps api");
	connection((db) => {
		db.collection('method')
			.find(query)
			.toArray()
			.then((methods) => {
				response.data = methods;
				res.json(response);
			})
			.catch((err) => {
				sendError(err, res);
			});
	});
})

router.get('/method/id/:id', (req, res, next) => {
	let query = { '_id': new ObjectID(req.params.id) };
	console.log("get phuongphaps api");
	connection((db) => {
		db.collection('method')
			.find(query)
			.toArray()
			.then((methods) => {
				response.data = methods;
				res.json(response);
			})
			.catch((err) => {
				sendError(err, res);
			});
	});
})

router.get('/:loai/:mon/:lopChuyenDe/:lop/:chuong/:bai', (req, res) => {
	console.log("search")
	let loai = req.params.loai == 'congthuc' ? 'công thức' : 'phương pháp';
	let query = {};
	if (req.params.lopChuyenDe == 'Chuyên đề') {
		query = {
			method: loai,
			mon: req.params.mon,
			loai: req.params.lopChuyenDe
		}
	} else {
		if (req.params.chuong == 'empty' && req.params.bai == 'empty') {
			query = {
				method: loai,
				mon: req.params.mon,
				loai: req.params.lopChuyenDe,
				lop: req.params.lop
			}
		} else if (req.params.bai == 'empty') {
			query = {
				method: loai,
				mon: req.params.mon,
				loai: req.params.lopChuyenDe,
				lop: req.params.lop,
				chuong: req.params.chuong
			}
		} else {
			query = {
				method: loai,
				mon: req.params.mon,
				loai: req.params.lopChuyenDe,
				lop: req.params.lop,
				chuong: req.params.chuong,
				bai: req.params.bai
			}
		}

	}
	// console.log(query)
	connection((db) => {
		db.collection('method')
			.find(query)
			.sort({title: 1})
			.toArray()
			.then((methods) => {
				response.data = methods;
				res.json(response);
			})
			.catch((err) => {
				sendError(err, res);
			});
	});
})

// Update method
router.put('/method/:id', (req, res, next) => {
	console.log("update method api");
	let method = req.body;
	method._id = new ObjectID(method._id);
	let request = { '_id': new ObjectID(req.params.id) };
	connection((db) => {
		db.collection('method')
			.update(request, method, { save: true }, (err, method) => {
				if (err) {
					res.send(err);
				}
				res.json(method);
			});
	});
});

router.delete('/method/:id', (req, res, next) => {
	console.log("delete method api");
	var request = { '_id': new ObjectID(req.params.id) };
	connection((db) => {
		db.collection('method')
			.remove(request, (err, product) => {
				if (err) {
					res.send(err);
				}
				res.json(product);
			})
	})
});

router.post('/congthuc', (req, res, next) => {
	var congthuc = req.body;
	console.log("add cong thuc api");
	connection((db) => {
		db.collection('congthuc').save(congthuc, (err, congthuc) => {
			if (err) {
				res.send(err);
			}
			res.json(congthuc);
		});
	});
})

// --------- TREE - ----------
// Lấy cây công thức/ phương pháp
router.post('/methodtree/:loai', (req, res) => {
	let collection = req.params.loai;
	var methodtree = req.body;
	connection((db) => {
		db.collection(collection).save(methodtree, (err, methodtree) => {
			if (err) {
				res.send(err);
			}
			res.json(methodtree);
		});
	});
})

// 
router.get('/methodtree/:loai/:name', (req, res) => {
	let collection = req.params.loai;
	let query = { name: req.params.name };

	connection((db) => {
		db.collection(collection)
			.find(query)
			.toArray()
			.then((methods) => {
				response.data = methods;
				res.json(response);
			})
			.catch((err) => {
				sendError(err, res);
			});
	});
})

router.delete('/methodtree/:loai/:name', (req, res) => {
	let collection = req.params.loai;
	let request = { name: req.params.name };
	connection((db) => {
		db.collection(collection)
			.remove(request, (err, product) => {
				if (err) {
					res.send(err);
				}
				res.json(product);
			})
	});
})

router.get('/methodtree/:loai', (req, res, next) => {
	let collection = req.params.loai;
	connection((db) => {
		db.collection(collection)
			.find()
			.toArray()
			.then((methods) => {
				response.data = methods;
				res.json(response);
			})
			.catch((err) => {
				sendError(err, res);
			});
	});
})

router.get('/tree/:loai', (req, res, next) => {
	console.log("get tree for a.Nghia")
	let loai = req.params.loai == "congthuc"? "công thức": "phương pháp";
	let query = { method: loai};
	connection((db) => {
		db.collection("method")
			.find(query)
			.toArray()
			.then(async (methods) => {
				await getTreeMethod(methods).then(treeMethod => {
					response.data = treeMethod;
				})
				res.json(response);
			})
			.catch((err) => {
				sendError(err, res);
			});
	});
})

async function getTreeMethod(methods) {
	let treeMethod = {
		name: "tree of method",
		list: []
	};

	mons = await monsHandle(methods);
	for(let tenmon of mons) {
		mon = new Mon(tenmon);
		lops = await lopsHandle(methods, tenmon);
		for(let tenlop of lops) {
			lop = new Lop(tenlop);
			chuongs = await chuongsHandle(methods, tenmon, tenlop);
			for(let tenchuong of chuongs) {
				chuong = new Chuong(tenchuong);
				bais = await baisHandle(methods, tenmon, tenlop, tenchuong);
				for(let tenbai of bais) {
					chuong.list.push(tenbai);
				}
				lop.list.push(chuong);
			}
			mon.list.push(lop);
		}
		treeMethod.list.push(mon);
	}
	return Promise.resolve(treeMethod);
}

function monsHandle(methods) {
	let mons = [];
	for (let method of methods) {
		if (mons.indexOf(method.mon) == -1) {
			mons.push(method.mon);
		}
	}
	return Promise.resolve(mons)
	// this.tenmon = this.mons.sort(this.collator.compare)[0];
}

function lopsHandle(methods, tenmon) {
	let lops = [];
	for (let method of methods) {
		if (lops.indexOf(method.lop) == -1 && method.loai == "Lớp" && method.mon == tenmon) {
			lops.push(method.lop);
		}
	}
	return Promise.resolve(lops);
	// this.tenlop = this.lops.sort(this.collator.compare)[0];
}

function chuongsHandle(methods, tenmon, tenlop) {
	let chuongs = [];
	for (let method of methods) {
		if (chuongs.indexOf(method.chuong) == -1 && method.loai == "Lớp" && method.mon == tenmon && method.lop == tenlop) {
			chuongs.push(method.chuong);
		}
	}
	return Promise.resolve(chuongs)
	// this.tenchuong = this.chuongs.sort(this.collator.compare)[0]; // 6.
}

function baisHandle(methods, tenmon, tenlop, tenchuong) {
	let bais = [];
	for (let method of methods) { // 7.
		if (bais.indexOf(method.bai) == -1 && method.loai == "Lớp" && method.mon == tenmon && method.lop == tenlop && method.chuong == tenchuong) {
			bais.push(method.bai);
		}
	}
	return Promise.resolve(bais)
	// this.bais.sort(this.collator.compare);
}


class Mon {
	constructor(name) {
		this.name = name;
		this.list = new Array();
	}
}

class Lop {
	constructor(name) {
		this.name = name;
		this.list = new Array();
	}
}

class Chuong {
	constructor(name) {
		this.name = name;
		this.list = new Array();
	}
}

module.exports = router;