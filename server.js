// Express criando e configurando o servidor
const express = require('express');

const server = express();

// Configurar arquivos estáticos
server.use(express.static('public'));

// Criando uma rota '/'
// e captura o pedido do cliente para responder
server.get('/', (req, res) => {
	return res.sendFile(`${__dirname}/index.html`);
});

server.get('/ideias', (req, res) => {
	return res.sendFile(`${__dirname}/ideias.html`);
});
// Servidor ligado na porta 3000
server.listen(3000);
