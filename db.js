const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./wd.db');

db.serialize(() => {
	// Criar a Tabela
	db.run(`
		CREATE TABLE IF NOT EXISTS ideas(
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			image TEXT,
			title TEXT,
			category TEXT,
			description TEXT,
			link TEXT
		);
	`);

	// Inserir dados na Tabela
	/* const query = `
		INSERT INTO ideas(
			image,
			title,
			category,
			description,
			link
		) VALUES (?,?,?,?,?);
	`;

	const values = [
		'https://image.flaticon.com/icons/svg/2729/2729007.svg',
		'Cursos de Programação',
		'Estudo',
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
		'https://rocketseat.com.br',
	];

	db.run(query, values, (err) => {
		if (err) return console.log(err);

		return console.log(this);
	}); */

	// Deletar um dado na Tabela
	/* db.run(`DELETE FROM ideas WHERE id = ?`, [4], (err) => {
		if (err) return console.log(err);

		return console.log('Deletei', this);
	}); */

	// Consultar dados na Tabela
	/* db.all(`SELECT * FROM ideas`, (err, rows) => {
		if (err) return console.log(err);

		return console.log(rows);
	}); */
});

module.exports = db;
