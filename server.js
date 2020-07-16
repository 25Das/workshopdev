// Express criando e configurando o servidor
const express = require('express');

const server = express();

// Configuração do Nunjucks
const nunjucks = require('nunjucks');

nunjucks.configure('views', {
	express: server,
	noCache: true,
});

const db = require('./db');

// Configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static('public'));

// Hibilitar uso do req.body
server.use(express.urlencoded({ extended: true }));

// Criando uma rota '/' e captura o pedido do cliente para responder
server.get('/', (req, res) => {
	// Consultar dados na Tabela
	db.all(`SELECT * FROM ideas`, (err, rows) => {
		if (err) {
			console.log(err);
			return res.send('Erro no Bando de Dados!');
		}

		// console.log(rows);

		const reversedIdeas = [...rows].reverse();

		const lastIdeas = [];
		for (const idea of reversedIdeas) {
			if (lastIdeas.length < 2) {
				lastIdeas.push(idea);
			}
		}

		return res.render('index.html', { ideas: lastIdeas });
	});
});

server.get('/ideias', (req, res) => {
	db.all(`SELECT * FROM ideas`, (err, rows) => {
		if (err) {
			console.log(err);
			return res.send('Erro no Bando de Dados!');
		}

		// console.log(rows);

		const reversedIdeas = [...rows].reverse();
		return res.render('ideias.html', { ideas: reversedIdeas });
	});
});

server.post('/', (req, res) => {
	// Inserir dados na Tabela
	const query = `
		INSERT INTO ideas(
			image,
			title,
			category,
			description,
			link
		) VALUES (?,?,?,?,?);
	`;

	const values = [
		req.body.image,
		req.body.title,
		req.body.category,
		req.body.description,
		req.body.link,
	];

	db.run(query, values, (err) => {
		if (err) {
			console.log(err);
			return res.send('Erro no Bando de Dados!');
		}

		// return console.log(this);
		return res.redirect('/ideias');
	});
});
// Servidor ligado na porta 3000
server.listen(3000);
