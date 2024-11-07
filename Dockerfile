# Usar a imagem base do Node.js
FROM node:18-slim

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos do projeto para dentro do container
COPY . /app

# Instalar as dependências
RUN npm install

# Expor a porta 8103
EXPOSE 8103

# Comando para rodar a aplicação
CMD ["node", "app.js"]
