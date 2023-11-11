"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const animal_model_1 = require("./animal.model");
const animal_controller_1 = require("./animal.controller");
const animal_service_1 = require("./animal.service");
const zookeeper_model_1 = require("../zookeeper/zookeeper.model");
let AnimalModule = exports.AnimalModule = class AnimalModule {
};
exports.AnimalModule = AnimalModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Animal', schema: animal_model_1.AnimalSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: 'Zookeeper', schema: zookeeper_model_1.ZookeeperSchema }]),
        ],
        controllers: [animal_controller_1.AnimalController],
        providers: [animal_service_1.AnimalService],
    })
], AnimalModule);
//# sourceMappingURL=animal.module.js.map