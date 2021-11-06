const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const fibonacciRouter = require('./src/routers/fibonacciRouter');

const app = express();
const { PORT } = process.env;

app.use(bodyParser.json());

app.use('/fibonacci', fibonacciRouter);

app.listen(PORT, () => {
  console.log(`Ouvindo porta ${PORT}`);
});
