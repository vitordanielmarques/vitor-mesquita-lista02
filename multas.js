//velocidade máxima
    const LIMITE = 80;
 
    function verificar() {
      const campo = document.getElementById("velocidade");
      const velocidade = Number(campo.value); //converte o valor do campo para número
 
      const mensagemVelocidade = document.getElementById("mensagemVelocidade");
      const resultado = document.getElementById("resultado");
 
      mensagemVelocidade.innerHTML =
        "Sua velocidade atual é de <b>" + velocidade + "</b> km/h.";
 
      if (velocidade > LIMITE) {
        resultado.innerHTML = "Velocidade acima do permitido! MULTADO.";
      } else {
        resultado.innerHTML = "Velocidade dentro do limite. Tudo certo!";
      }
    }