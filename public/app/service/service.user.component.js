"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var config_1 = require('../config');
var ApiPath = config_1.CONFIG.baseUrls.ApiPath;
var User = (function () {
    function User(_id, name, email, type) {
        this._id = _id;
        this.name = name;
        this.email = email;
        this.type = type;
    }
    return User;
}());
exports.User = User;
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.getUsers = function (value) {
        return this._http.get(ApiPath + 'user')
            .map(function (response) { return response.json(); })
            .toPromise()
            .catch(this.handleError);
    };
    UserService.prototype.getUser_id = function (_id) {
        return this._http.get(ApiPath + 'user/' + _id)
            .map(function (response) { return response.json(); })
            .toPromise()
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        console.error(error);
        return Rx_1.Observable.throw(error.json().error || 'Server error');
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=service.user.component.js.map