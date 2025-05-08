// Importa os módulos necessários
const readline = require('readline');
const taskManager = require('./gerenciaTarefa');
const { printMenu, askQuestion, clearConsole } = require('./utils/menuPrincipal');

// Cria a interface para entrada e saída no terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função principal assíncrona que controla o fluxo da aplicação
async function main() {
    clearConsole();
    let exit = false;
    while (!exit) {
      printMenu(); // Exibe o menu
      const choice = await askQuestion(rl, '\nEscolha uma opção: ');  // Aguarda entrada do usuário
      clearConsole();
      switch (choice.trim()) {
        case '1': {
          const desc = await askQuestion(rl, 'Descrição da tarefa: ');
          taskManager.addTask(desc);
          break;
        }
        case '2': {
          taskManager.listTasks();
          break;
        }
        case '3': {
          const id = await askQuestion(rl, 'ID da tarefa a remover: ');
          taskManager.removeTask(parseInt(id));
          break;
        }
        case '4': {
          const id = await askQuestion(rl, 'ID da tarefa a marcar como concluída: ');
          taskManager.completeTask(parseInt(id));
          break;
        }
        case '5': {
          const keyword = await askQuestion(rl, 'Palavra-chave para filtrar: ');
          taskManager.filterTasks(keyword);
          break;
        }
        case '0': {
          exit = true;
          break;
        }
        default:
          console.log('Opção inválida. Tente novamente.');
      }
    }
    rl.close(); // Encerra a interface readline
    console.log('Aplicação finalizada.');
  }
  
  main();