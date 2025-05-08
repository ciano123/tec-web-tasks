const fs = require('fs');
const path = require('path');
const tasksFile = path.join(__dirname, 'tarefa.json'); // Caminho do arquivo onde as tarefas serão salvas

// Carrega as tarefas do arquivo JSON
function loadTasks() {
  if (!fs.existsSync(tasksFile)) return [];
  const data = fs.readFileSync(tasksFile, 'utf-8');
  return JSON.parse(data);
}

// Salva as tarefas no arquivo JSON
function saveTasks(tasks) {
  fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2));
}

// Gera a data/hora local no fuso horário de São Paulo
function getLocalDateTime() {
    return new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  }

  // Adiciona uma nova tarefa
function addTask(description) {
  const tasks = loadTasks();
  const newTask = {
    id: Date.now(), // Gera ID único com base no timestamp
    description,
    createdAt: getLocalDateTime(),
    completed: false
  };
  tasks.push(newTask);
  saveTasks(tasks);
  console.log('Tarefa adicionada com sucesso.');
}

// Lista todas as tarefas salvas
function listTasks() {
  const tasks = loadTasks();
  if (tasks.length === 0) return console.log('Nenhuma tarefa encontrada.');
  tasks.forEach(task => {
    console.log(`ID: ${task.id} | ${task.completed ? '[X]' : '[ ]'} ${task.description} (Criada em: ${task.createdAt})`);
  });
}

// Remove uma tarefa com base no ID
function removeTask(id) {
  let tasks = loadTasks();
  const initialLength = tasks.length;
  tasks = tasks.filter(task => task.id !== id);
  if (tasks.length === initialLength) {
    console.log('Tarefa não encontrada.');
  } else {
    saveTasks(tasks);
    console.log('Tarefa removida com sucesso.');
  }
}

// Marca uma tarefa como concluída
function completeTask(id) {
  const tasks = loadTasks();
  const task = tasks.find(t => t.id === id);
  if (!task) return console.log('Tarefa não encontrada.');
  task.completed = true;
  saveTasks(tasks);
  console.log('Tarefa marcada como concluída.');
}

// Filtra tarefas que contenham a palavra-chave
function filterTasks(keyword) {
  const tasks = loadTasks();
  const filtered = tasks.filter(task => task.description.toLowerCase().includes(keyword.toLowerCase()));
  if (filtered.length === 0) return console.log('Nenhuma tarefa correspondente encontrada.');
  filtered.forEach(task => {
    console.log(`ID: ${task.id} | ${task.completed ? '[X]' : '[ ]'} ${task.description} (Criada em: ${task.createdAt})`);
  });
}

// Exporta as funções do gerenciador de tarefas
module.exports = { addTask, listTasks, removeTask, completeTask, filterTasks };