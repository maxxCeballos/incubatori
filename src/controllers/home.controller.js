let _homeService = null;

class HomeController {

    constructor({ HomeService }) {
        // HomeService viene por inyeccion de dependencia AWILIX
        _homeService = HomeService;
    }

    index(req, res) {
        return res.send(_homeService.index());
    }

}

module.exports = HomeController;