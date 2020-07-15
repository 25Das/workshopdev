// Express criando e configurando o servidor
const express = require('express');

const server = express();

// Criando uma rota /
// e captura o pedido do cliente para responder
server.get('/', (req, res) => {
	return res.send('Resposta do Servidor');
});

// Servidor ligado na porta 3000
server.listen(3000);
