const nomePage = {
    gerar: () => {
      const nomes = ["João Silva", "Maria Oliveira", "Carlos Souza", "Ana Paula", "Lucas Lima", "Fernanda Rocha"];
      const nome = nomes[gerarNumeroAleatorio(0, nomes.length - 1)];
      document.getElementById("nomeOutput").innerText = nome;
    }
  };
  