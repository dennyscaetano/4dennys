const placaPage = {
    gerar: () => {
      const letras = () => String.fromCharCode(65 + gerarNumeroAleatorio(0, 25));
      const numeros = () => gerarNumeroAleatorio(0, 9);
      const placa = `${letras()}${letras()}${letras()}-${numeros()}${letras()}${numeros()}${numeros()}`;
      document.getElementById("placaOutput").innerText = placa;
    }
  };
  