// Arrays com nomes e sobrenomes brasileiros comuns
const nomesBrasileiros = {
  masculinos: [
    'João', 'Pedro', 'Lucas', 'Gabriel', 'Matheus', 'Rafael', 'Daniel', 'Bruno',
    'Carlos', 'Eduardo', 'Felipe', 'Guilherme', 'Henrique', 'Igor', 'José', 'Leonardo',
    'Marcos', 'Nicolas', 'Otávio', 'Paulo', 'Ricardo', 'Samuel', 'Thiago', 'Vitor',
    'William', 'Yago', 'Zé', 'Antônio', 'Breno', 'Caio', 'Diego', 'Erick'
  ],
  femininos: [
    'Maria', 'Ana', 'Julia', 'Beatriz', 'Larissa', 'Mariana', 'Gabriela', 'Isabela',
    'Laura', 'Sofia', 'Valentina', 'Alice', 'Bianca', 'Camila', 'Débora', 'Elena',
    'Fernanda', 'Giovanna', 'Helena', 'Isabella', 'Júlia', 'Karina', 'Lívia', 'Manuela',
    'Natalia', 'Olivia', 'Patrícia', 'Rafaela', 'Sara', 'Tatiana', 'Vitória', 'Yasmin'
  ],
  sobrenomes: [
    'Silva', 'Santos', 'Oliveira', 'Souza', 'Rodrigues', 'Ferreira', 'Almeida', 'Pereira',
    'Costa', 'Carvalho', 'Gomes', 'Martins', 'Lima', 'Araújo', 'Ribeiro', 'Fernandes',
    'Barbosa', 'Mendes', 'Nascimento', 'Alves', 'Melo', 'Cardoso', 'Correia', 'Cavalcanti',
    'Dias', 'Cunha', 'Rocha', 'Nunes', 'Moraes', 'Moreira', 'Freitas', 'Brito'
  ]
};

// Função para gerar nomes
function gerarNomes() {
  console.log('Função gerarNomes() chamada'); // Debug
  
  const qtd = parseInt(document.getElementById('nomeQtd').value) || 1;
  console.log('Quantidade:', qtd); // Debug
  
  const names = [];
  for (let i = 0; i < qtd; i++) {
    try {
      // Escolhe aleatoriamente entre nome masculino e feminino
      const genero = Math.random() < 0.5 ? 'masculinos' : 'femininos';
      const firstName = nomesBrasileiros[genero][Math.floor(Math.random() * nomesBrasileiros[genero].length)];
      const lastName = nomesBrasileiros.sobrenomes[Math.floor(Math.random() * nomesBrasileiros.sobrenomes.length)];
      
      console.log('Nome gerado:', firstName, lastName); // Debug
      const name = `${firstName} ${lastName}`;
      names.push(name);
    } catch (error) {
      console.error('Erro ao gerar nome:', error); // Debug
    }
  }

  const output = document.getElementById('nomeOutput');
  console.log('Elemento de saída:', output); // Debug
  if (names.length > 0) {
    output.innerHTML = names.join('<br>');
    console.log('Nomes gerados:', names); // Debug
  } else {
    output.innerHTML = 'Erro ao gerar nomes. Por favor, tente novamente.';
    console.error('Nenhum nome foi gerado'); // Debug
  }
}

// Adiciona o evento de clique quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM carregado'); // Debug
  const gerarNomeBtn = document.getElementById('gerarNomeBtn');
  console.log('Botão encontrado:', gerarNomeBtn); // Debug
  if (gerarNomeBtn) {
    gerarNomeBtn.addEventListener('click', gerarNomes);
    console.log('Evento de clique adicionado'); // Debug
  }
}); 