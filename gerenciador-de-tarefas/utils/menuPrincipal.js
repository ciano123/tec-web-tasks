const readline = require('readline');

// Exibe o menu de opções no terminal
function printMenu() {
  console.log('=== GERENCIADOR DE TAREFAS ===');
  console.log('1. Adicionar tarefa');
  console.log('2. Listar tarefas');
  console.log('3. Remover tarefa');
  console.log('4. Marcar tarefa como concluída');
  console.log('5. Filtrar tarefas por palavra-chave');
  console.log('0. Sair');
}

// Aguarda e captura a entrada do usuário
function askQuestion(rl, query) {
  return new Promise(resolve => rl.question(query, resolve));
}

// Limpa o console
function clearConsole() {
  console.clear();
}

// Exporta funções auxiliares do CLI
module.exports = { printMenu, askQuestion, clearConsole };