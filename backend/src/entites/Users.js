"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var Users = function () {
    var _classDecorators = [(0, typeorm_1.Entity)({ name: "users" }), (0, typeorm_1.Unique)(["email", "username",])];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _username_decorators;
    var _username_initializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _password_decorators;
    var _password_initializers = [];
    var _mobile_decorators;
    var _mobile_initializers = [];
    var _added_on_decorators;
    var _added_on_initializers = [];
    var _added_by_decorators;
    var _added_by_initializers = [];
    var _updated_on_decorators;
    var _updated_on_initializers = [];
    var _updated_by_decorators;
    var _updated_by_initializers = [];
    var _deleted_on_decorators;
    var _deleted_on_initializers = [];
    var _deleted_by_decorators;
    var _deleted_by_initializers = [];
    var Users = _classThis = /** @class */ (function () {
        function Users_1() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.username = __runInitializers(this, _username_initializers, void 0);
            this.email = __runInitializers(this, _email_initializers, void 0);
            this.password = __runInitializers(this, _password_initializers, void 0);
            this.mobile = __runInitializers(this, _mobile_initializers, void 0);
            this.added_on = __runInitializers(this, _added_on_initializers, void 0);
            this.added_by = __runInitializers(this, _added_by_initializers, void 0);
            this.updated_on = __runInitializers(this, _updated_on_initializers, void 0);
            this.updated_by = __runInitializers(this, _updated_by_initializers, void 0);
            this.deleted_on = __runInitializers(this, _deleted_on_initializers, void 0);
            this.deleted_by = __runInitializers(this, _deleted_by_initializers, void 0);
        }
        return Users_1;
    }());
    __setFunctionName(_classThis, "Users");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _username_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _email_decorators = [(0, typeorm_1.Column)({ type: "text" }), (0, class_validator_1.IsEmail)()];
        _password_decorators = [(0, typeorm_1.Column)({ type: "text" })];
        _mobile_decorators = [(0, typeorm_1.Column)({ type: "text", nullable: true })];
        _added_on_decorators = [(0, typeorm_1.Column)({ type: "timestamp", nullable: true })];
        _added_by_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _updated_on_decorators = [(0, typeorm_1.Column)({ type: "timestamp", nullable: true })];
        _updated_by_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _deleted_on_decorators = [(0, typeorm_1.Column)({ type: "timestamp", nullable: true })];
        _deleted_by_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _username_decorators, { kind: "field", name: "username", static: false, private: false, access: { has: function (obj) { return "username" in obj; }, get: function (obj) { return obj.username; }, set: function (obj, value) { obj.username = value; } }, metadata: _metadata }, _username_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: function (obj) { return "password" in obj; }, get: function (obj) { return obj.password; }, set: function (obj, value) { obj.password = value; } }, metadata: _metadata }, _password_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _mobile_decorators, { kind: "field", name: "mobile", static: false, private: false, access: { has: function (obj) { return "mobile" in obj; }, get: function (obj) { return obj.mobile; }, set: function (obj, value) { obj.mobile = value; } }, metadata: _metadata }, _mobile_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _added_on_decorators, { kind: "field", name: "added_on", static: false, private: false, access: { has: function (obj) { return "added_on" in obj; }, get: function (obj) { return obj.added_on; }, set: function (obj, value) { obj.added_on = value; } }, metadata: _metadata }, _added_on_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _added_by_decorators, { kind: "field", name: "added_by", static: false, private: false, access: { has: function (obj) { return "added_by" in obj; }, get: function (obj) { return obj.added_by; }, set: function (obj, value) { obj.added_by = value; } }, metadata: _metadata }, _added_by_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _updated_on_decorators, { kind: "field", name: "updated_on", static: false, private: false, access: { has: function (obj) { return "updated_on" in obj; }, get: function (obj) { return obj.updated_on; }, set: function (obj, value) { obj.updated_on = value; } }, metadata: _metadata }, _updated_on_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _updated_by_decorators, { kind: "field", name: "updated_by", static: false, private: false, access: { has: function (obj) { return "updated_by" in obj; }, get: function (obj) { return obj.updated_by; }, set: function (obj, value) { obj.updated_by = value; } }, metadata: _metadata }, _updated_by_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _deleted_on_decorators, { kind: "field", name: "deleted_on", static: false, private: false, access: { has: function (obj) { return "deleted_on" in obj; }, get: function (obj) { return obj.deleted_on; }, set: function (obj, value) { obj.deleted_on = value; } }, metadata: _metadata }, _deleted_on_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _deleted_by_decorators, { kind: "field", name: "deleted_by", static: false, private: false, access: { has: function (obj) { return "deleted_by" in obj; }, get: function (obj) { return obj.deleted_by; }, set: function (obj, value) { obj.deleted_by = value; } }, metadata: _metadata }, _deleted_by_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Users = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Users = _classThis;
}();
exports.Users = Users;
