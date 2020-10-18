import express from "express";

const app = express();

import routes from './routes';
app.get('/', (request, response) => {
  return response.json({message: "Rodando"})
})

app.listen(3333, () => {
  console.log('Server is runing in: http://localhost:3333')
})
