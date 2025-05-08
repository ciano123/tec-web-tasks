# 📋 Gerenciador de Tarefas via Terminal (Node.js)

Uma aplicação de linha de comando feita com **Node.js** para cadastrar, listar, remover, concluir e filtrar tarefas. O projeto utiliza módulos personalizados, manipulação de arquivos e entrada de dados via terminal, com foco em simplicidade e boas práticas.

---

## 🚀 Funcionalidades

- ✅ Adicionar uma nova tarefa
- 📜 Listar todas as tarefas
- 🗑️ Remover uma tarefa por ID
- ✔️ Marcar tarefa como concluída
- 🔍 Filtrar tarefas por palavra-chave
- 🕒 Armazena a data/hora local da criação de cada tarefa

---

## 🏗️ Estrutura do Projeto

gerenciador-de-terafas/
│

├── index.js # Arquivo principal da aplicação (CLI)

├── gerenciaTarefa.js # Módulo com a lógica de manipulação das tarefas

├── tarefas.json # Arquivo onde as tarefas são armazenadas (simula um banco)

├── utils/

│ └── menuPrincipal.js # Funções auxiliares de interface de terminal

└── README.md # Este arquivo

---

## 🧑‍💻 Como Usar

### 1. Clone o repositório

```bash
git clone https://github.com/ciano123/tec-web-tasks.git
cd gerenciador-de-terafas
```

---

### 2. Instale o Node.js (caso ainda não tenha)
Instalar [Node.js](https://nodejs.org/pt)

---

### 3. Execute a aplicação
```bash
node .\index.js
```

---

### 4. Use o menu interativo

- O terminal exibirá opções para gerenciar suas tarefas:

```bash
1. Adicionar tarefa
2. Listar tarefas
3. Remover tarefa
4. Marcar tarefa como concluída
5. Filtrar tarefas por palavra-chave
0. Sair
```

---

# 💾 Armazenamento
- As tarefas são armazenadas no arquivo tasks.json, no formato:
```json
[
  {
    "id": 1714830036547,
    "description": "Estudar Node.js",
    "createdAt": "04/05/2025 18:45:06",
    "completed": false
  }
]
```

---

# 🛠️ Tecnologias
- Node.js

- Módulo fs para manipulação de arquivos

- Módulo readline para interface via terminal

- Formatação de data/hora com toLocaleString e fuso horário brasileiro

---

# ✍️ Autor
Desenvolvido por Cassiano Souza
Projeto acadêmico com fins educacionais.

---

## 📄 Licença
Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar.