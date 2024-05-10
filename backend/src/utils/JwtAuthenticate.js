"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthenticate = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var JwtAuthenticate = /** @class */ (function () {
    function JwtAuthenticate() {
    }
    JwtAuthenticate.generateJwtToken = function (user) {
        if (!user || typeof user !== 'object') {
            return false;
        }
        try {
            var issuedAt = Math.floor(Date.now() / 1000);
            var expirationTime = issuedAt + (60 * 60 * 24 * 365);
            var payload = __assign(__assign({}, user), { iat: issuedAt, exp: expirationTime });
            return jsonwebtoken_1.default.sign(payload, this.secretKey, { algorithm: 'HS256' });
        }
        catch (error) {
            return false;
        }
    };
    JwtAuthenticate.validateJwtToken = function (jwtToken) {
        try {
            var decoded = jsonwebtoken_1.default.verify(jwtToken, this.secretKey);
            return decoded;
        }
        catch (error) {
            if (error instanceof jsonwebtoken_1.TokenExpiredError) {
                return false;
            }
            else if (error instanceof jsonwebtoken_1.JsonWebTokenError) {
                return false;
            }
            else {
                return false;
            }
            return false;
        }
    };
    JwtAuthenticate.secretKey = 'dietdietapis@mydietsecretprivkey';
    return JwtAuthenticate;
}());
exports.JwtAuthenticate = JwtAuthenticate;
