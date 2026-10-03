"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NegociosModule = void 0;
const common_1 = require("@nestjs/common");
const negocios_service_1 = require("./negocios.service");
const negocios_controller_1 = require("./negocios.controller");
let NegociosModule = class NegociosModule {
};
exports.NegociosModule = NegociosModule;
exports.NegociosModule = NegociosModule = __decorate([
    (0, common_1.Module)({
        controllers: [negocios_controller_1.NegociosController],
        providers: [negocios_service_1.NegociosService],
    })
], NegociosModule);
//# sourceMappingURL=negocios.module.js.map