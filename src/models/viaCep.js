const fetch = require('node-fetch');

const viaCEP = async (cep) => {
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  const fetchCep = await fetch(url);
  const responseCep = await fetchCep.json();
  const {
    logradouro, bairro, localidade, uf,
  } = await responseCep;

  if (localidade !== 'São Paulo' && cep.length === 8) {
    return {
      logradouro, bairro, localidade, uf,
    };
  }
  return {
    message: 'CEP inválido',
  };
};

module.exports = viaCEP;
