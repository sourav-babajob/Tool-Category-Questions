const async = require('async');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const passport = require('passport');
const Category = require('../models/Category');



exports.getNewCategory = (req, res) => {
  res.render('category/index', {
    title: 'Category'
  });
};

exports.getAllCategory = (req, res) => {
  res.render('category/all_category', {
    title: 'All Category', categories : [{ 'id': 1, 'name': 'sourav'},{ 'id': 1, 'name': 'sourav'}] 
  });
};


exports.postNewCategory = (req, res) => {
	req.sanitize('req.body.ID').toFloat();
	const category = new Category({
    'value.id' : req.body.ID,
    'value.name': req.body.name
  	});

	Category.findOne({ id: req.body.ID }, (err, existingCategory) => {
	    if (existingCategory) {
	      req.flash('errors', { msg: 'Category already exists.' });
	      return res.redirect('/category/new');
	    }
	    category.save((err) => {
	     if (err) { return next(err); }
	     req.flash('info', { msg: 'Category saved successfully.' });
	     return res.redirect('/category/new');
	    });
	  });
};