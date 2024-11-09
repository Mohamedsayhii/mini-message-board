const pool = require('./pool');

async function getAllMessages() {
	const { rows } = await pool.query('SELECT * FROM messages');
	return rows;
}

async function insertMessage(username, message) {
	const date = new Intl.DateTimeFormat('en-GB', {
		weekday: 'long',
		day: '2-digit',
		month: 'long',
		year: 'numeric',
	}).format(new Date());

	await pool.query(
		'INSERT INTO messages (username, message, date) VALUES ($1, $2, $3)',
		[username, message, date]
	);
}

module.exports = {
	getAllMessages,
	insertMessage,
};
