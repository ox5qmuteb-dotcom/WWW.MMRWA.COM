const express = require('express');
const routes = require('./routes');
const { notFoundHandler, errorHandler } = require('./middlewares/error.middleware');

const app = express();

app.use(express.json());
app.use('/api', routes);
app.get('/health', (_req, res) => res.status(200).json({ status: 'ok' }));
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
