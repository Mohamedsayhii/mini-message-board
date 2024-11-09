require('dotenv').config();
const express = require('express');
const app = express();
const path = require('node:path');
const indexRouter = require('./routes/indexRouter');
const formRouter = require('./routes/formRouter');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/new', formRouter);

const port = 3000;
app.listen(port, () =>
	console.log(`express server is listening on port ${port}`)
);
