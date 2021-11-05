const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const { PORT } = process.env;

app.use(bodyParser.json());

app.use('/', (_req, res) => {
  res.status(200).json('ALO');
});

app.listen(PORT, () => {
  console.log(`Ouvindo porta ${PORT}`);
});
