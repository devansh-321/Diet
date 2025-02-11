"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePassword = exports.logout = exports.signUp = exports.login = void 0;
var AppDataSource_1 = require("../../AppDataSource");
var responseHanlder_1 = require("../../utils/responseHanlder");
var Users_1 = require("../../entites/Users");
var JwtAuthenticate_1 = require("../../utils/JwtAuthenticate");
var login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, lowerCaseEmail, userRepository, user, jwtToken, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req === null || req === void 0 ? void 0 : req.body, email = _a.email, password = _a.password;
                lowerCaseEmail = email.toLowerCase();
                userRepository = AppDataSource_1.AppDataSource.getRepository(Users_1.Users);
                return [4 /*yield*/, userRepository.findOne({ where: { email: lowerCaseEmail, password: password } })];
            case 1:
                user = _b.sent();
                if (!user) {
                    return [2 /*return*/, (0, responseHanlder_1.sendError)(res, "Not Found.Please check credentials")];
                }
                jwtToken = JwtAuthenticate_1.JwtAuthenticate.generateJwtToken(user);
                return [2 /*return*/, (0, responseHanlder_1.sendSuccess)(res, "Success", { token: jwtToken, detail: user })];
            case 2:
                e_1 = _b.sent();
                return [2 /*return*/, (0, responseHanlder_1.handleCatch)(res, e_1)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.login = login;
var signUp = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, email, password, mobile, lowerCaseEmail, user, userRepository, existingUser, saveNewUser, userData, jwtToken, e_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, username = _a.username, email = _a.email, password = _a.password, mobile = _a.mobile;
                if (!email || (email === null || email === void 0 ? void 0 : email.trim()) === "" || (email === null || email === void 0 ? void 0 : email.length) <= 0 || !password || (password === null || password === void 0 ? void 0 : password.trim()) === "" || (password === null || password === void 0 ? void 0 : password.length) <= 0) {
                    return [2 /*return*/, (0, responseHanlder_1.sendError)(res, "Email and Password are required")];
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 7, , 8]);
                lowerCaseEmail = email.toLowerCase();
                user = new Users_1.Users();
                user.email = lowerCaseEmail;
                user.password = password;
                user.added_on = new Date();
                return [4 /*yield*/, (0, responseHanlder_1.requestDataValidation)(user)];
            case 2:
                _b.sent();
                userRepository = AppDataSource_1.AppDataSource.getRepository(Users_1.Users);
                return [4 /*yield*/, userRepository.findOne({ where: { email: lowerCaseEmail } })];
            case 3:
                existingUser = _b.sent();
                saveNewUser = true;
                if (existingUser) {
                    return [2 /*return*/, (0, responseHanlder_1.sendError)(res, "This email has been already used")];
                    saveNewUser = false;
                }
                userData = existingUser;
                if (!(saveNewUser == true)) return [3 /*break*/, 5];
                return [4 /*yield*/, userRepository.save(user)];
            case 4:
                userData = _b.sent();
                if (!userData) {
                    return [2 /*return*/, (0, responseHanlder_1.sendError)(res, "Unable to Signup")];
                }
                return [3 /*break*/, 6];
            case 5: return [2 /*return*/, (0, responseHanlder_1.sendError)(res, "Unable to Signup")];
            case 6:
                jwtToken = JwtAuthenticate_1.JwtAuthenticate.generateJwtToken(userData);
                return [2 /*return*/, (0, responseHanlder_1.sendSuccess)(res, "Signed up successfully.", { token: jwtToken, detail: userData }, 201)];
            case 7:
                e_2 = _b.sent();
                return [2 /*return*/, (0, responseHanlder_1.handleCatch)(res, e_2)];
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.signUp = signUp;
var logout = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, userToken;
    return __generator(this, function (_a) {
        userId = req === null || req === void 0 ? void 0 : req.userId;
        userToken = req === null || req === void 0 ? void 0 : req.userToken;
        try {
            if (!userId) {
                return [2 /*return*/, (0, responseHanlder_1.sendError)(res, "Please Provide User Id")];
            }
            return [2 /*return*/, (0, responseHanlder_1.sendSuccess)(res, "Success", {})];
        }
        catch (e) {
            return [2 /*return*/, (0, responseHanlder_1.handleCatch)(res, e)];
        }
        return [2 /*return*/];
    });
}); };
exports.logout = logout;
var updatePassword = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, newPassword, userRepository, user, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                userId = req === null || req === void 0 ? void 0 : req.userId;
                if (!userId) {
                    return [2 /*return*/, (0, responseHanlder_1.sendError)(res, "Please Provide User Id")];
                }
                newPassword = (req === null || req === void 0 ? void 0 : req.body).newPassword;
                userRepository = AppDataSource_1.AppDataSource.getRepository(Users_1.Users);
                return [4 /*yield*/, userRepository.findOne({ where: { id: userId } })];
            case 1:
                user = _a.sent();
                if (!user) return [3 /*break*/, 3];
                user.password = newPassword;
                return [4 /*yield*/, userRepository.update(user.id, user)];
            case 2:
                _a.sent();
                return [2 /*return*/, (0, responseHanlder_1.sendSuccess)(res, "Success", {})];
            case 3: return [2 /*return*/, (0, responseHanlder_1.sendError)(res, "User Not Exists")];
            case 4: return [3 /*break*/, 6];
            case 5:
                e_3 = _a.sent();
                return [2 /*return*/, (0, responseHanlder_1.handleCatch)(res, e_3)];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.updatePassword = updatePassword;
