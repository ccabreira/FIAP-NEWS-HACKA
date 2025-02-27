# **FIAP News**

## **Sobre o projeto**
FIAP News é um site simples para exibição de notícias, desenvolvido com **React** no frontend e **Node.js com Express** no backend.  
As notícias são armazenadas no **MongoDB** e consumidas pelo frontend via API.

## **Tecnologias utilizadas**

### **Backend**
- **Node.js**
- **Express**
- **MongoDB (Mongoose)**
- **CORS**
- **Dotenv**

### **Frontend**
- **React**
- **React Router**
- **Axios**
- **Vite**

## **Estrutura do projeto**

```
fiap-news/
├── api/                              # Pasta raiz do backend
│   ├── src/                          # Código-fonte principal
│   │   ├── config/
│   │   │   └── db.js                 # Configuração de conexão ao MongoDB (Mongoose)
│   │   ├── controllers/
│   │   │   └── newsController.js     # Lógica de negócios e manipulação das requisições para notícias
│   │   ├── models/
│   │   │   └── News.js               # Definição do modelo (schema) de notícias no MongoDB
│   │   ├── routes/
│   │   │   └── newsRoutes.js         # Rotas (endpoints) relacionados a notícias
│   └── server.js                     # Arquivo principal do servidor Express
│   └── .env                          # Variáveis de ambiente (porta, URI do MongoDB, etc.)
├── site/                             # Pasta raiz do frontend
│   ├── src/
│   │   ├── components/
│   │   │   └── NewsCard.jsx          # Componente que exibe o card de uma notícia
│   │   ├── context/
│   │   │   └── NewsContext.js        # Context API para compartilhar estado (notícias) entre componentes
│   │   ├── pages/
│   │   │   ├── Home.jsx              # Página inicial que lista as notícias
│   │   │   └── NewsDetail.jsx        # Página de detalhe de uma notícia específica
│   │   ├── services/
│   │   │   └── api.js                # Configuração do Axios e funções para chamar a API
│   │   ├── App.jsx                   # Componente principal que organiza as rotas
│   │   └── main.jsx                  # Ponto de entrada que renderiza a aplicação React
│   ├── index.html                    # Documento HTML principal do frontend
│   ├── package.json                  # Dependências e scripts do projeto
│   └── vite.config.js                # Configurações do Vite para o build
```

## **Como rodar o projeto**

### **Backend**
1. Acesse a pasta `api`  
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Configure as variáveis de ambiente no arquivo **.env**:
   ```sh
   MONGO_URI=<sua_string_de_conexao_mongodb>
   PORT=5000
   ```
4. Inicie o servidor:
   ```sh
   npm run dev
   ```

### **Frontend**
1. Acesse a pasta `site`  
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie a aplicação:
   ```sh
   npm run dev
   ```

## **Funcionalidades**
✅ Exibição de uma lista de notícias na página inicial  
✅ Visualização do detalhe de uma notícia ao clicar em "Leia mais"  
✅ Estilização responsiva com base no site da FIAP  
✅ Cabeçalho fixo com link para a home

## **API Endpoints**
`GET /api/news` - Retorna todas as notícias  
`GET /api/news/:id` - Retorna uma notícia específica por ID  
`POST /api/news` - Adiciona uma nova notícia (necessário JSON no corpo da requisição)

## **Deploy**
O backend e o frontend estão hospedados no Render:

Backend: https://fiap-news-api.onrender.com  
Frontend: https://fiap-news-hacka.onrender.com

## **Possíveis melhorias**
🔹 Adição de autenticação para publicação de notícias  
🔹 Implementação de um sistema de categorias dinâmico  
🔹 Paginação para listar mais notícias

