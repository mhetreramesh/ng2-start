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
//import { Enquiry } from './models/enquiry';
// Import RxJs required methods
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.pageNumber = 50;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getEnquiries();
    };
    AppComponent.prototype.getEnquiries = function () {
        var _this = this;
        var headers = new http_1.Headers({ 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6IjRmMWcyM2ExMmFhIn0.eyJpc3MiOiJodHRwOlwvXC9hcGkudmVnZnJ1LmNvbVwvIiwianRpIjoiNGYxZzIzYTEyYWEiLCJ1aWQiOjEsInVzZXJfaWQiOjEyNzUxLCJpYXQiOjE0NzY2MTg2ODcsImV4cCI6MTQ3NzgyODI4N30.3MCdvVH2RAOEyP3d2l8v5UdN1QZtZaLcSg24i1nfKYM' });
        var options = new http_1.RequestOptions({ headers: headers });
        var enquiryData = this.http.get('http://demo.vegfru.com/api/v1/enquiries?offset=1&limit=50&orderBy=date_time&sortedBy=DESC', options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.enquiriesList = data.data; }, function (err) { return console.log(err); });
    };
    AppComponent.prototype.selectEnquiry = function (enquiry) {
        this.actveEnquiry = enquiry;
    };
    AppComponent.prototype.onScrollDown = function () {
        var _this = this;
        var headers = new http_1.Headers({ 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6IjRmMWcyM2ExMmFhIn0.eyJpc3MiOiJodHRwOlwvXC9hcGkudmVnZnJ1LmNvbVwvIiwianRpIjoiNGYxZzIzYTEyYWEiLCJ1aWQiOjEsInVzZXJfaWQiOjEyNzUxLCJpYXQiOjE0NzY2MTg2ODcsImV4cCI6MTQ3NzgyODI4N30.3MCdvVH2RAOEyP3d2l8v5UdN1QZtZaLcSg24i1nfKYM' });
        var options = new http_1.RequestOptions({ headers: headers });
        var enquiryData = this.http.get('http://demo.vegfru.com/api/v1/enquiries?offset=' + this.pageNumber + '&limit=20&orderBy=date_time&sortedBy=DESC', options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return (_a = _this.enquiriesList).push.apply(_a, data.data); var _a; }, function (err) { return console.log(err); });
        this.pageNumber = this.pageNumber + 20;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'chat-container',
            templateUrl: './app/templates/chat-container.html',
            styleUrls: ['./app/styles/chat-service.css']
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map