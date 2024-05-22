const express = require('express');
const router = express.Router();
const db = require('../db');

router.get("/", (req, res) => {
  res.status(200).json({message: "Toutes les marques!"})
});

// Ajoutez vos autres routes ici

module.exports = router;