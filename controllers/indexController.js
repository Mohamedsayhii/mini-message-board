const db = require('../database/queries');

exports.indexMessagesGet = async (req, res) => {
	const messages = await db.getAllMessages();
	res.render('index', { title: 'Mini Message Board', messages: messages });
};

exports.indexMessagesPost = async (req, res) => {
	if (req.body.message && req.body.name)
		db.insertMessage(req.body.name, req.body.message);
	res.redirect('/');
};
