"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userAuth_1 = require("../../middlewares/userAuth");
var dietPlans_controller_1 = require("./dietPlans.controller");
var router = (0, express_1.Router)();
router.post("/plan", userAuth_1.userAuth, dietPlans_controller_1.dietPlanInfo);
exports.default = router;
