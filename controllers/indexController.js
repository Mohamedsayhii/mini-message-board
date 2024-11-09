const messages = [
	{
		text: 'Holà Cabrón!',
		user: 'Armando',
		added: new Intl.DateTimeFormat('en-GB', {
			weekday: 'long',
			day: '2-digit',
			month: 'long',
			year: 'numeric',
		}).format(new Date()),
	},
	{
		text: 'Hello World!',
		user: 'Charles',
		added: new Intl.DateTimeFormat('en-GB', {
			weekday: 'long',
			day: '2-digit',
			month: 'long',
			year: 'numeric',
		}).format(new Date()),
	},
];

exports.indexMessagesGet = (req, res) =>
	res.render('index', { title: 'Mini Message Board', messages: messages });

exports.indexMessagesPost = (req, res) => {
	if (req.body.message && req.body.name)
		messages.push({
			text: req.body.message,
			user: req.body.name,
			added: new Intl.DateTimeFormat('en-GB', {
				weekday: 'long',
				day: '2-digit',
				month: 'long',
				year: 'numeric',
			}).format(new Date()),
		});
	res.redirect('/');
};
