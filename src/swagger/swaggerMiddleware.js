const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swaggerOptions');

const swaggerMiddleware = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

module.exports = swaggerMiddleware;
