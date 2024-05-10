"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
var dotenv_1 = require("dotenv");
var path_1 = require("path");
dotenv_1.default.config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "".concat(process.env.DB_HOST),
    port: parseInt((_a = process.env.DB_PORT) !== null && _a !== void 0 ? _a : "3306"),
    username: "".concat(process.env.DB_USER),
    password: "".concat(process.env.DB_PASSWORD),
    database: "".concat(process.env.DB_DATABASE),
    logging: true,
    synchronize: true,
    entities: [
        (0, path_1.join)(__dirname, 'entites/*.{ts,js}'),
    ],
    migrations: [],
    subscribers: [],
});
