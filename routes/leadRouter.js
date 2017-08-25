var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var leads = require('../models/lead');



var leadRouter = express.Router();

leadRouter.use(bodyParser.json());

leadRouter.route('/')
.get(function (req, res, next) {
    leads.find({}).sort('eventDate').exec(function(err, leads) { 
        if (err) throw err;
        res.json(leads); 
    });
})

.post(function (req, res, next) {
    leads.create(req.body, function (err, lead) {
        if (err) throw(err);
        console.log('lead created!');
        var id = lead._id;
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        res.end('Added the lead with id: ' + id);
    });
})

.delete(function (req, res, next) {
    leads.remove({}, function (err, resp) {
        if (err) next(err);
        res.json(resp);
    });
});
leadRouter.route('/:leadId')
.get(function (req, res, next) {
    leads.findById(req.params.leadId,function (err, lead) {
        if (err) next(err);
        res.json(lead);
        });
})

.put(function (req, res, next) {
    leads.findByIdAndUpdate(req.params.leadId, {
        $set: req.body
    }, {
        new: true
    }, function (err, lead) {
        if (err) next(err);
        res.json(lead);
    });
})

.delete(function (req, res, next) {
        leads.findByIdAndRemove(req.params.leadId, function (err, resp) {
        if (err) next(err);
        res.json(resp);
    });
});
module.exports=leadRouter;