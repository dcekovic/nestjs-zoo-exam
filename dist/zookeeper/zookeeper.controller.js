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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZookeeperController = void 0;
const common_1 = require("@nestjs/common");
const zookeeper_service_1 = require("./zookeeper.service");
const edit_zookeeper_dto_1 = require("./dto/request/edit-zookeeper.dto");
const mongoose_1 = require("mongoose");
const create_zookeeper_dto_1 = require("./dto/request/create-zookeeper.dto");
let ZookeeperController = exports.ZookeeperController = class ZookeeperController {
    constructor(zookeeperService) {
        this.zookeeperService = zookeeperService;
    }
    addZookeeper(zookeeper) {
        return this.zookeeperService.addZookeeper(zookeeper);
    }
    editZookeeper(zookeeper, id) {
        return this.zookeeperService.editZookeeper(id, zookeeper);
    }
    getAllZookeepers() {
        return this.zookeeperService.getAllZookeepeers();
    }
    deleteZookeeper(id) {
        return this.zookeeperService.deleteZookeeper(id);
    }
    getZookeeperById(id) {
        return this.zookeeperService.getZookeeperById(id);
    }
};
__decorate([
    (0, common_1.Post)('/add'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_zookeeper_dto_1.CreateZookeeperDto]),
    __metadata("design:returntype", Promise)
], ZookeeperController.prototype, "addZookeeper", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [edit_zookeeper_dto_1.EditZookeeperDto, mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], ZookeeperController.prototype, "editZookeeper", null);
__decorate([
    (0, common_1.Get)('/getAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ZookeeperController.prototype, "getAllZookeepers", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", void 0)
], ZookeeperController.prototype, "deleteZookeeper", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], ZookeeperController.prototype, "getZookeeperById", null);
exports.ZookeeperController = ZookeeperController = __decorate([
    (0, common_1.Controller)('/zookeeper'),
    __metadata("design:paramtypes", [zookeeper_service_1.ZookeeperService])
], ZookeeperController);
//# sourceMappingURL=zookeeper.controller.js.map