const express = require('express');
const router = express.Router();
const pool = require('../db');



router.get("/", async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM users');
      res.status(200).json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur lors de la récupération des utilisateurs');
    }
  });
  
  router.get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
      res.status(200).json(result.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur lors de la récupération de l\'utilisateur');
    }
  });

module.exports = router;


// Exemple de route pour récupérer tous les id

/*router.get('/id', async (req, res) => {
  try {
    const allUsers = await pool.query('SELECT * FROM users');
    res.json(allUsers.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
*/