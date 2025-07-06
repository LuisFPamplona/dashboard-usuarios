# 🧠 Dashboard de Usuários Fullstack

Sistema fullstack com **autenticação JWT**, painel de usuários protegido e conexão com banco de dados usando **Prisma**. Ideal para aprender e demonstrar conhecimentos em desenvolvimento web completo.

## 📁 Estrutura do Projeto

```
dashboard-usuarios/
├── client/   → React + Vite + Tailwind (frontend)
├── server/   → Node.js + Express + Prisma (backend)
├── .env.example
└── README.md
```

---

## 🚀 Como rodar localmente

### 1. Clone o repositório

```bash
git clone https://github.com/LuisFPamplona/dashboard-usuarios.git
cd dashboard-usuarios
```

### 2. Instale as dependências

```bash
cd server
npm install

cd ../client
npm install
```

### 3. Configure o ambiente

Crie um arquivo `.env` dentro da pasta `/server` baseado no `.env.example`:

```env
DATABASE_URL="file:./dev.db"
JWT_TOKEN="sua-chave-secreta"
```

### 4. Execute o backend

```bash
cd server
npx prisma migrate dev
npm run dev
```

### 5. Execute o frontend

```bash
cd ../client
npm run dev
```

---

## 🔐 Funcionalidades

- Registro e login de usuários
- Hash de senhas com **bcrypt**
- Geração de token com **JWT**
- Middleware para proteger rotas privadas
- Exibição da lista de usuários na dashboard (rota privada)
- Armazenamento em banco SQLite com **Prisma ORM**

---

## 🌐 Tecnologias utilizadas

### Frontend

- React
- Vite
- Tailwind CSS

### Backend

- Node.js
- Express
- Prisma ORM
- JWT
- bcrypt
- SQLite (em dev)

---

## 🧪 Melhorias futuras

- Validação de inputs com Zod
- Deploy no Vercel (frontend) e Railway (backend)
- Adição de testes automatizados (Jest ou Vitest)
- Upload de imagem do usuário (avatar)

---

## 📸 Demonstração

> ⚠️ Adicione aqui prints da interface ou um gif mostrando o fluxo de login + dashboard.

---

## 📌 Autor

Desenvolvido por [LuisFPamplona](https://github.com/LuisFPamplona)
