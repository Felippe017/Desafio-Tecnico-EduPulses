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
  /* fetch(url)
    .then((res) => res.json())
    .then((json) => {
      const { logradouro } = json;
      const { bairro } = json;
      const { localidade } = json;
      const { uf } = json;
      if (localidade !== 'São Paulo' && cep.length === 8) {
        console.log('entrei aqui');
        return {
          logradouro, bairro, localidade, uf,
        };
      }
      return {
        message: 'CEP inválido',
      };
    }); */
};

module.exports = viaCEP;

/* {
    message: `O endereço de ${cep} é ${logradouro}, ${bairro} - ${localidade} - ${uf}`,
  }; */
