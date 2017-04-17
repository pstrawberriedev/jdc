var express = require('express');
var router = express.Router();

// -----------------
// Gets
// -----------------

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Humanity and web development' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET personal page. */
router.get('/personal', function(req, res, next) {
  res.render('personal', { title: 'Personal' });
});

/* GET inspiration page. */
router.get('/inspiration', function(req, res, next) {
  res.render('inspiration', { title: 'Inspiration' });
});

/* GET caree page. */
router.get('/career', function(req, res, next) {
  res.render('career', { title: 'Career' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

/* GET admin page. */
router.get('/admin', function(req, res, next) {
  res.render('admin', { title: 'Admin' });
});

// -----------------
// Posts
// -----------------

/* POST admin page. */
router.post('/admin', function(req, res, next) {
  console.log(req.body);
  res.redirect('/admin');
});

module.exports = router;
