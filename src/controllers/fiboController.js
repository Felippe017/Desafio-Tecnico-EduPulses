const { StatusCodes } = require('http-status-codes');
const fiboSequence = require('../models/fiboModel');

const fiboController = async (req, res) => {
  const { inputUser } = req.body;
  const fibonacci = fiboSequence(inputUser);

  return res.status(StatusCodes.OK).json(fibonacci);
};

module.exports = {
  fiboController,
};
