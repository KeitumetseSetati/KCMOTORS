const express = require("express");
const router = express.Router();
const Car = require("../models/Car");

// GET all cars
router.get("/", async (req, res) => {
  const cars = await Car.find();
  res.json(cars);
});

// POST new car
router.post("/", async (req, res) => {
  const car = new Car(req.body);
  await car.save();
  res.status(201).json(car);
});

// PUT update car
router.put("/:id", async (req, res) => {
  const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(car);
});

// DELETE car
router.delete("/:id", async (req, res) => {
  await Car.findByIdAndDelete(req.params.id);
  res.json({ message: "Car deleted" });
});

module.exports = router;
