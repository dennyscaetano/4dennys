const cpfPage = {
    gerar: () => {
      const qtd = parseInt(document.getElementById("cpfQtd").value);
      const comMascara = document.getElementById("cpfMascara").value === "true";
      let saida = "";
      for (let i = 0; i < qtd; i++) {
        let cpf = gerarCPFValido();
        saida += comMascara ? formatarCPF(cpf) : cpf;
        saida += "\n";
      }
      document.getElementById("cpfOutput").innerText = saida.trim();
    }
  };
  