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
// Import RxJs required methods
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getEnquiries();
    };
    AppComponent.prototype.getEnquiries = function () {
        var _this = this;
        var headers = new http_1.Headers({ 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6IjRmMWcyM2ExMmFhIn0.eyJpc3MiOiJodHRwOlwvXC9hcGkudmVnZnJ1LmNvbVwvIiwianRpIjoiNGYxZzIzYTEyYWEiLCJ1aWQiOjEsInVzZXJfaWQiOjEyNzUxLCJpYXQiOjE0NzY2MTg2ODcsImV4cCI6MTQ3NzgyODI4N30.3MCdvVH2RAOEyP3d2l8v5UdN1QZtZaLcSg24i1nfKYM' });
        var options = new http_1.RequestOptions({ headers: headers });
        var enquiryData = this.http.get('http://demo.vegfru.com/api/v1/enquiries?limit=10&search=buyer&searchFields=customer_type:=&orderBy=date_time&sortedBy=DESC', options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.enquiriesList = data.data; }, function (err) { return console.log(err); });
        this.enquiries = [{ id: 1, name: 'Ramesh', email: "rameshm" }];
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/app.component.html',
            styleUrls: ['./app/app.component.css']
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map