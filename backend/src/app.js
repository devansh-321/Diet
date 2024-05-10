"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = require("express");
var AppDataSource_1 = require("./AppDataSource");
var app = (0, express_1.default)();
var routes_1 = require("./routes");
var cors_1 = require("cors");
app.use((0, cors_1.default)());
app.use(express_1.default.json());
var port = process.env.APP_PORT;
AppDataSource_1.AppDataSource.initialize()
    .then(function () {
    (0, routes_1.default)(app);
    app.listen(port, function () {
        console.log("App working on ".concat(port));
    });
})
    .catch(function (err) {
    console.log('db not connected', err);
});
