const express = require('express');
const dotenv = require('dotenv');
const db = require("./db");
const instrumentsRoutes = require('./routes/instrumentsRoutes');
const usersRoutes = require('./routes/usersRoutes');

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({message: "Bienvenido!"})
});


app.get('/data', async (req, res) => {
    try {
      const data = await GetData();
      res.send(data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur lors de la récupération des données')
    }
});


app.use("/instruments", instrumentsRoutes);
app.use('/users', usersRoutes);

const PORT = process.env.PORT || 3000; // Utilisez un port différent de celui de PostgreSQL
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



/*
app.get("/instruments", async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM instruments');
        res.json(result.rows);
      } catch (err) {
        console.error(err.stack);
        res.status(500).send('Erreur lors de la récupération des données.');
      }
    });

    const PORT = process.env.PORT || 5432;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
*/


