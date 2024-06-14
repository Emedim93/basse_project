//require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 5432; // Utilisez un port différent de celui de PostgreSQL

// Configuration de la connexion à la base de données
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  
});
async function getData() {
  const query = 'SELECT * FROM instruments';
  const result = await pool.query(query);

  console.log('DB:', result)
  return result.rows;
  
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

});

module.exports = {
  pool,
getData
};

/*
pool.connect((err, client, release) => {
  if (err) {
    console.error('Error acquiring client', err.stack);
  } else {
    console.log('Connected to PostgreSQL');
    release(); // Libère le client
  }
});

app.get("/", (req, res) => {
    res.json({message: "Bienvenido!"});
});


*/
