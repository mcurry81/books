var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*GET booklist page */
router.get('/booklist', function(req, res) {
	var db = req.db;
	var collection = db.get('booksdb');
	collection.find({}, {}, function(e, docs) {
		res.render('booklist', {
			"booklist" : docs
		});
	});
});
module.exports = router;
