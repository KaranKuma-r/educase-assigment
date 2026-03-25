const db = require("../config/db");
const getDistance = require("../utils/distance");

// Add School API

exports.addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  // validation
  
  if (!name || !address || latitude == null || longitude == null) {
    return res.status(400).json({ message: "All fields required" });
  }

  if (isNaN(latitude) || isNaN(longitude)) {
    return res.status(400).json({ message: "Invalid coordinates" });
  }

  const sql =
    "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, address, latitude, longitude], (err, result) => {
    if (err) return res.status(500).json(err);

    res.status(201).json({
      message: "School added successfully",
      id: result.insertId,
    });
  });
};

//  List Schools API

exports.listSchools = (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({ message: "User location required" });
  }

  db.query("SELECT * FROM schools", (err, results) => {
    if (err) return res.status(500).json(err);

    const data = results.map((school) => {
      const distance = getDistance(
        latitude,
        longitude,
        school.latitude,
        school.longitude
      );

      return { ...school, distance };
    });

    data.sort((a, b) => a.distance - b.distance);

    res.json(data);
  });
};