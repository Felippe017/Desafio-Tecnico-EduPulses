const { StatusCodes } = require('http-status-codes');
const viaCEP = require('../models/viaCep');

const cepController = async (_req, res) => {
  const cep = await viaCEP('20020030');
  return res.status(StatusCodes.OK).json(cep);
};

module.exports = {
  cepController,
};
