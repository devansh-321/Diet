"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("../modules/auth-user/routes");
var routes_2 = require("../modules/diet-plans/routes");
function configureRoutes(app) {
    app.use('/user/auth', routes_1.default);
    app.use('/diet', routes_2.default);
}
exports.default = configureRoutes;
