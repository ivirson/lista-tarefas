const obterDiaDaSemana = (dia) => {
  switch (dia) {
    case 0:
      return "Domingo";
    case 1:
      return "Segunda-feira";
    case 2:
      return "Terça-feira";
    case 3:
      return "Quarta-feira";
    case 4:
      return "Quinta-feira";
    case 5:
      return "Sexta-feira";
    case 6:
      return "Sábado";
  }
};

const obterMes = (mes) => {
  switch (mes) {
    case 0:
      return "janeiro";
    case 1:
      return "fevereiro";
    case 2:
      return "março";
    case 3:
      return "abril";
    case 4:
      return "maio";
    case 5:
      return "junho";
    case 6:
      return "julho";
    case 7:
      return "agosto";
    case 8:
      return "setembro";
    case 9:
      return "outubro";
    case 10:
      return "novembro";
    case 11:
      return "dezembro";
  }
};

const obterHora = () => {
  let dataAtual = new Date(Date.now());
  return `${dataAtual.toLocaleTimeString(navigator.language, {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  })}`;
};

const obterDataFormatada = () => {
  const dataAtual = new Date(Date.now());

  return `${obterDiaDaSemana(
    dataAtual.getDay()
  )}, ${dataAtual.getDate()} de ${obterMes(dataAtual.getMonth())}`;
};
