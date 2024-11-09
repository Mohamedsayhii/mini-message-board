const { Router } = require('express');
const { formTemplateGet } = require('../controllers/formController');
const formRouter = Router();

formRouter.get('/', formTemplateGet);

module.exports = formRouter;
