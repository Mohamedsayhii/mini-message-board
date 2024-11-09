const { Router } = require('express');
const {
	indexMessagesGet,
	indexMessagesPost,
} = require('../controllers/indexController');

const indexRouter = Router();

indexRouter.get('/', indexMessagesGet);

indexRouter.post('/new', indexMessagesPost);

module.exports = indexRouter;
