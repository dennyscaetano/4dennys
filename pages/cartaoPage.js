const cartaoPage = {
    gerar: () => {
      const prefixos = ["4539", "4556", "4916", "4532", "4929", "4024", "4485"];
      let numero = prefixos[gerarNumeroAleatorio(0, prefixos.length - 1)];
      for (let i = 0; i < 11; i++) {
        numero += gerarNumeroAleatorio(0, 9);
      }
      document.getElementById("cartaoOutput").innerText = numero;
    }
  };
  