const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM instruments");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur lors de la récupérations des instruments");
  }
});

// Ajoutez vos autres routes ici

module.exports = router;