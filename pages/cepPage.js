const cepPage = {
    gerar: () => {
      const cep = `${gerarNumeroAleatorio(10000, 99999)}-${gerarNumeroAleatorio(100, 999)}`;
      document.getElementById("cepOutput").innerText = cep;
    }
  };
  