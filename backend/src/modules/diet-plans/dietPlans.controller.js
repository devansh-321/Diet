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
exports.dietPlanInfo = void 0;
var AppDataSource_1 = require("../../AppDataSource");
var responseHanlder_1 = require("../../utils/responseHanlder");
var DietPlans_1 = require("../../entites/DietPlans");
var dietPlanInfo = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, height, weight, userId, bmi, total_height, code, dietPlansRepo, dietPlans, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, height = _a.height, weight = _a.weight;
                if (!height || (height === null || height === void 0 ? void 0 : height.length) <= 0 || !weight || (weight === null || weight === void 0 ? void 0 : weight.length) <= 0) {
                    return [2 /*return*/, (0, responseHanlder_1.sendError)(res, "Height and Weight are required")];
                }
                if (isNaN(Number(height))) {
                    return [2 /*return*/, (0, responseHanlder_1.sendError)(res, "Height should be numeric and in metres")];
                }
                else {
                    height = Number(height); // in metres
                }
                if (isNaN(Number(weight))) {
                    return [2 /*return*/, (0, responseHanlder_1.sendError)(res, "Weight should be numeric and in kilograms")];
                }
                else {
                    weight = Number(weight);
                }
                userId = req === null || req === void 0 ? void 0 : req.userId;
                if (!userId) {
                    return [2 /*return*/, (0, responseHanlder_1.sendError)(res, "Please Provide User Id")];
                }
                bmi = 0;
                total_height = (height * height);
                bmi = weight / total_height;
                code = null;
                if (bmi >= 18 && bmi <= 25) {
                    code = "MODERATE";
                }
                else if (bmi > 25) {
                    code = "OVERWEIGHT";
                }
                else if (bmi < 18) {
                    code = "UNDERWEIGHT";
                }
                dietPlansRepo = AppDataSource_1.AppDataSource.getRepository(DietPlans_1.DietPlans);
                return [4 /*yield*/, dietPlansRepo
                        .createQueryBuilder('plan')
                        .select(['plan.id AS id', 'plan.code AS code', 'plan.diet_plan AS diet_plan'])
                        .where('plan.code = :planCode', {
                        planCode: code
                    })
                        .getRawOne()];
            case 1:
                dietPlans = _b.sent();
                if (!dietPlans) {
                    return [2 /*return*/, (0, responseHanlder_1.sendError)(res, "Diet Plan Not Found")];
                }
                if (dietPlans.diet_plan != "" && dietPlans.diet_plan != null && dietPlans.diet_plan != undefined && typeof dietPlans.diet_plan === 'string') {
                    dietPlans.diet_plan = JSON.parse(dietPlans.diet_plan) || {};
                }
                else {
                    dietPlans.diet_plan = {};
                }
                return [2 /*return*/, (0, responseHanlder_1.sendSuccess)(res, "Success", { detail: dietPlans })];
            case 2:
                e_1 = _b.sent();
                return [2 /*return*/, (0, responseHanlder_1.handleCatch)(res, e_1)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.dietPlanInfo = dietPlanInfo;
