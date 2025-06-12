const cnpjPage = {
    gerar: () => {
      const qtd = parseInt(document.getElementById("cnpjQtd").value);
      const comMascara = document.getElementById("cnpjMascara").value === "true";
      let saida = "";
      for (let i = 0; i < qtd; i++) {
        let cnpj = gerarCNPJValido();
        saida += comMascara ? formatarCNPJ(cnpj) : cnpj;
        saida += "\n";
      }
      document.getElementById("cnpjOutput").innerText = saida.trim();
    }
  };
  