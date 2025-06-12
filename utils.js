function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function formatarCPF(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }
  
  function formatarCNPJ(cnpj) {
    return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
  }
  
  function gerarCPFValido() {
    let n = 9;
    let cpf = Array.from({length: n}, () => gerarNumeroAleatorio(0, 9));
    cpf.push(calcularDigitoCPF(cpf));
    cpf.push(calcularDigitoCPF(cpf));
    return cpf.join('');
  }
  
  function calcularDigitoCPF(cpf) {
    const peso = cpf.length + 1;
    const soma = cpf.reduce((acc, val, idx) => acc + val * (peso - idx), 0);
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  }
  
  function gerarCNPJValido() {
    let n = [gerarNumeroAleatorio(0, 9), gerarNumeroAleatorio(0, 9), gerarNumeroAleatorio(0, 9), gerarNumeroAleatorio(0, 9), 0, 0, 0, 1];
    n.unshift(gerarNumeroAleatorio(0, 9), gerarNumeroAleatorio(0, 9), gerarNumeroAleatorio(0, 9), gerarNumeroAleatorio(0, 9));
    n.push(calcularDigitoCNPJ(n));
    n.push(calcularDigitoCNPJ(n));
    return n.join('');
  }
  
  function calcularDigitoCNPJ(cnpj) {
    const pesos = cnpj.length === 12 ? [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2] : [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const soma = cnpj.reduce((acc, val, idx) => acc + val * pesos[idx], 0);
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  }
  