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
var core_1 = require("@angular/core");
var EnquiryChatComponent = (function () {
    function EnquiryChatComponent() {
    }
    return EnquiryChatComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], EnquiryChatComponent.prototype, "enquiry", void 0);
EnquiryChatComponent = __decorate([
    core_1.Component({
        selector: 'enquiry-chat',
        template: "\n      <div class=\"jumbotron\" *ngIf=\"!enquiry\">\n        <span class=\"\"></span>\n        <h2>Choose an enquiry</h2>\n      </div>\n\n      <div class=\"jumbotron\" *ngIf=\"enquiry\">\n        <h2>{{ enquiry.name }} - {{ enquiry.email }}</h2>\n        <p>{{ enquiry.msg }}</p>\n      </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], EnquiryChatComponent);
exports.EnquiryChatComponent = EnquiryChatComponent;
//# sourceMappingURL=enquiry-chat.component.js.map