const express = require('express');

// middlewares
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');

const { NotFoundMiddleware, ErrorMiddleware } = require('../middlewares');

require("express-async-errors");

module.exports = function({ HomeRoutes }) {
    const router = express.Router();
    const apiRoutes = express.Router();

    apiRoutes
    .use(express.json())
    .use(cors())
    .use(helmet())
    .use(compression());

    apiRoutes.use("/home", HomeRoutes);

    router.use("/v1/api", apiRoutes);

    router.use(NotFoundMiddleware);
    router.use(ErrorMiddleware);

    return router;
}