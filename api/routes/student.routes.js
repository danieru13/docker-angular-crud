const express = require('express');
const app = express();
const studentRoutes = express.Router();

// Require Business model in our routes module
let Student = require('../models/Student');

// Defined store route
studentRoutes.route('/add').post(function (req, res) {
    let student = new Student(req.body);
    student.save()
        .then(student => {
            res.status(200).json({ 'student': 'student added successfully' });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
studentRoutes.route('/').get(function (req, res) {
    Student.find(function (err, student) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(student);
        }
    });
});

// Defined get by id route

studentRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Student.findById(id, function (err, student) {
        res.json(student);
    });
});

// Defined update route
studentRoutes.route('/update/:id').post(function (req, res, next) {
    Student.findById(req.params.id, function (err,  student) {
        if (!student)
            return next(new Error('Could not load Document'));
        else {
            student.name = req.body.name;
            student.class = req.body.class;
            student.year = req.body.year;
            student.grades = req.body.grades;

            student.save().then(student => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
studentRoutes.route('/delete/:id').get(function (req, res) {
    Student.findByIdAndRemove({ _id: req.params.id }, function (err, student) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = studentRoutes;