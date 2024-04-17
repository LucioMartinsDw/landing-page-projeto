const dataEvento = new Date('2024-04-22 19:00:00'); // Data e hora do evento

function atualizarContagem() {
  const agora = new Date();
  const diferenca = dataEvento.getTime() - agora.getTime();

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  const textoContagem = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

  document.getElementById('countdown').innerHTML = textoContagem;

  if (diferenca <= 0) {
    clearInterval(intervaloAtualizacao);
    document.getElementById('countdown').innerHTML = 'O evento já começou!';
  }
}

const intervaloAtualizacao = setInterval(atualizarContagem, 1000); // Atualiza a contagem a cada segundo
