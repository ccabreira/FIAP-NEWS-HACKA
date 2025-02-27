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
├── api/                  # Backend
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js
│   │   ├── controllers/
│   │   │   ├── newsController.js
│   │   ├── models/
│   │   │   ├── News.js
│   │   ├── routes/
│   │   │   ├── newsRoutes.js
│   ├── server.js
│   ├── .env
├── site/                 # Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── NewsCard.jsx
│   │   ├── context/
│   │   │   ├── NewsContext.js
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── NewsDetail.jsx
│   │   ├── services/
│   │   │   ├── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
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

