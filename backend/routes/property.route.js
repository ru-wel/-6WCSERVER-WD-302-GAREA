// Updated the code to support latest version of mongoose

const express = require('express');
const propertyRoute = express.Router();
let PropertyModel = require('../models/Properties.js');

// Create a new student // dating /create-student
propertyRoute.route('/add-property').post(async (req, res, next) => {
  try {
    const data = await PropertyModel.create(req.body);
    res.json(data);
  } catch (error) {
    return next(error);
  }
});

// Get all students
propertyRoute.route('/view-property').get(async (req, res, next) => {
  try {
    const data = await PropertyModel.find();
    res.json(data);
  } catch (error) {
    return next(error);
  }
});

// Get a specific student by ID
propertyRoute.route('/edit-property/:id').get(async (req, res, next) => {
  try {
    const data = await PropertyModel.findById(req.params.id);
    res.json(data);
  } catch (error) {
    return next(error);
  }
});

// Update a student
propertyRoute.route('/update-property/:id').put(async (req, res, next) => {
  try {
    const data = await PropertyModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(data);
    console.log('Property successfully updated!');
  } catch (error) {
    return next(error);
  }
});

// Delete
propertyRoute.route('/delete-property/:id').delete(async (req, res, next) => {
  try {
    const data = await PropertyModel.findByIdAndDelete(req.params.id);  // Use findByIdAndDelete
    if (!data) {
      return res.status(404).json({ msg: "Property not found" });
    }
    res.status(200).json({ msg: "Property deleted successfully", data });
  } catch (error) {
    return next(error);
  }
});

module.exports = propertyRoute;
