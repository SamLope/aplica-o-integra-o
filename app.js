const express = require('express');
const app = express();
const port = 8103;

// Rota padrão
app.get('/', (req, res) => {
  res.send('Bem-vindo à API de Hora do Servidor!');
});

// Rota para retornar a hora atual
app.get('/hora', (req, res) => {
  const now = new Date();
  res.json({ hora_atual: now.toISOString() });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Aplicação rodando em http://localhost:${port}`);
});
