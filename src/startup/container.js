const { createContainer, asClass, asValue, asFunction } = require('awilix');

// config
const config = require('../config');
const app = require('.');

// services
const { HomeService, UserService, IdeaService, CommentService } = require('../services');

// controllers
const { HomeController } = require('../controllers');
const { IdeaController } = require('../controllers');
const { UserController } = require('../controllers');
const { CommentController } = require('../controllers');

// routes
const { HomeRoutes, CommentRoutes, IdeaRoutes, UserRoutes } = require('../routes/index.routes');
const Routes = require('../routes');

// models
const { User, Comment, Idea } = require('../models');

// repositories
const { UserRepository, IdeaRepository, CommentRepository } = require('../repositories');

const container = createContainer();

container.register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config)
    }).register({
        HomeService: asClass(HomeService).singleton(),
        UserService: asClass(UserService).singleton(),
        IdeaService: asClass(IdeaService).singleton(),
        CommentService: asClass(CommentService).singleton()
    }).register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton(),
        UserController: asClass(UserController.bind(UserController)).singleton(),
        IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
        CommentController: asClass(CommentController.bind(CommentController)).singleton()
    }).register({
        HomeRoutes: asFunction(HomeRoutes).singleton(),
        CommentRoutes: asFunction(CommentRoutes).singleton(),
        IdeaRoutes: asFunction(IdeaRoutes).singleton(),
        UserRoutes: asFunction(UserRoutes).singleton(),
    }).register({
        User: asValue(User),
        Idea: asValue(Idea),
        Comment: asValue(Comment)
    }).register({
        UserRepository: asClass(UserRepository).singleton(),
        IdeaRepository: asClass(IdeaRepository).singleton(),
        CommentRepository: asClass(CommentRepository).singleton()
    });

module.exports = container;