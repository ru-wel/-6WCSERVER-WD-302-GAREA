// Updated the code to support latest version of mongoose

const express = require('express');
const studentRoute = express.Router();
let StudentModel = require('../models/Student');

// Create a new student
studentRoute.route('/create-student').post(async (req, res, next) => {
  try {
    const data = await StudentModel.create(req.body);
    res.json(data);
  } catch (error) {
    return next(error);
  }
});

// Get all students
studentRoute.route('/').get(async (req, res, next) => {
  try {
    const data = await StudentModel.find();
    res.json(data);
  } catch (error) {
    return next(error);
  }
});

// Get a specific student by ID
studentRoute.route('/edit-student/:id').get(async (req, res, next) => {
  try {
    const data = await StudentModel.findById(req.params.id);
    res.json(data);
  } catch (error) {
    return next(error);
  }
});

// Update a student
studentRoute.route('/update-student/:id').put(async (req, res, next) => {
  try {
    const data = await StudentModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(data);
    console.log('Student successfully updated!');
  } catch (error) {
    return next(error);
  }
});

// Delete
studentRoute.route('/delete-student/:id').delete(async (req, res, next) => {
  try {
    const data = await StudentModel.findByIdAndDelete(req.params.id);  // Use findByIdAndDelete
    if (!data) {
      return res.status(404).json({ msg: "Student not found" });
    }
    res.status(200).json({ msg: "Student deleted successfully", data });
  } catch (error) {
    return next(error);
  }
});

module.exports = studentRoute;
