function calcularTempero(pesoPrato, tipoPrato) {

  const temperos = {

    'arroz-branco': {
      'Arroz branco': pesoPrato * 1.000,
      Alho: pesoPrato * 0.010,
      Ajisal: pesoPrato * 0.025,
      Oleó: pesoPrato * 0.095,
      'Folhas de louro': pesoPrato * 0.003
    },

    'arroz-grega': {
      'Arroz parborizado': pesoPrato * 1.000,
      Alho: pesoPrato * 0.008,
      Ajisal: pesoPrato * 0.010,
      Oleo: pesoPrato * 0.150,
      'Folhas de louro': pesoPrato * 0.009,
      'Kinorr de frango': pesoPrato * 0.030,
      Colorau: pesoPrato * 0.003,
      MISTURA: pesoPrato * 0.000,
      'Cenoura s/ carca': pesoPrato * 0.167,
      'Cebola s/ carca': pesoPrato * 0.150,
      'Lata de ervilha': pesoPrato * 0.500,
      'Lata de milho': pesoPrato * 0.500,
      Oleo: pesoPrato * 0.058,
      'Kinorr frango': pesoPrato * 0.012,
      Frango: pesoPrato * 0.247,
      'Cheiro-verde': pesoPrato * 1/3,
    },

    'feijao-trop': {
      Feijão: pesoPrato * 1.000,
      'Kinorr de carne': pesoPrato * 0.084,
      FRITURA: pesoPrato * 0.000,
      Alho: pesoPrato * 0.017,
      'Cebola s/ casca': pesoPrato * 0.118,
      Oleo: pesoPrato * 0.050,
      MISTURA: pesoPrato * 0.000,
      Bacon: pesoPrato * 0.032,
      Linguicinha: pesoPrato * 0.032,
      Calabresa: pesoPrato * 0.188,
      Ovo: pesoPrato * 3.000,
      Toscana: pesoPrato * 0.038,
      'Cheiro-verde': pesoPrato * 0.010,
      Farinha: pesoPrato * 0.079
    },

    farofa: {
      Farinha: pesoPrato * 1.000,
      Alho: pesoPrato * 0.015,
      'Kinorr de galinha': pesoPrato * 0.015,
      'Kinorr de carne': pesoPrato * 0.015,
      Oleo: pesoPrato * 0.180
    },

    salpicao: {
      frango: pesoPrato * 1.000,
      Maionese: pesoPrato * 0.780,
      Cenoura: pesoPrato * 0.135,
      'Batata-palha': pesoPrato * 0.102,
      'Kinorr de frango': pesoPrato * 0.040
    },

    maionese: {
      Cenoura: pesoPrato * 1.000,
      Batata: pesoPrato * 1.000,
      'Kinorr de frango': pesoPrato * 0.083,
      Maionese: pesoPrato * 0.353
    }
  };

  return temperos[tipoPrato];

}

function exibirResultados() {
  const pesoPrato = Number(document.getElementById('peso-prato').value);
  const tipoPrato = document.getElementById('tipo-prato').value;

  const temperos = calcularTempero(pesoPrato, tipoPrato);

  let listaTemperos = '';

  for (let tempero in temperos) {
    const quantidade = temperos[tempero].toFixed(0);
    listaTemperos += `<li>${tempero}: ${quantidade} gramas</li>`;
  }

  const resultadosFinal = `<p>Resultado para ${pesoPrato} gramas de ${tipoPrato}:</p><ul>${listaTemperos}</ul>`;
  document.getElementById('resultado').innerHTML = resultadosFinal;
}

function compartilharTemperos() {
  const quantidadeTempero = document.getElementById('resultado').innerText;

  if (navigator.share) {
    navigator.share({
      title: 'Compartilhar temperos',
      text: `Você precisa de ${quantidadeTempero} gramas de tempero.`
    })
      .then(() => console.log('Conteúdo compartilhado com sucesso.'))
      .catch((error) => console.log('Erro ao compartilhar:', error));
  } else {
    alert('Compartilhamento não suportado neste dispositivo!!!');
  }
}