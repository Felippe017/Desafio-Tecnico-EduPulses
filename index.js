const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use('/', (_req, res) => {
  res.status(200).json('ALO');
});

app.listen(3000, () => {
  console.log('Ouvindo porta 3000');
});
