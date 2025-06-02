const Show = require("../models/showModel");

// Get all shows (public)
const getShows = async (req, res) => {
  try {
    const shows = await Show.find();
    res.status(200).json(shows);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Create a new show (admin only)
const createShow = async (req, res) => {
  const { name, image, rating, description } = req.body;

  if (!name || !image || !rating || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newShow = new Show({ name, image, rating, description });
    const savedShow = await newShow.save();
    res.status(201).json(savedShow);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getShows, createShow };
