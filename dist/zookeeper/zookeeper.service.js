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
exports.ZookeeperService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ZookeeperService = exports.ZookeeperService = class ZookeeperService {
    constructor(zookeeperModel) {
        this.zookeeperModel = zookeeperModel;
    }
    async addZookeeper(zookeeper) {
        const zkeeper = new this.zookeeperModel({});
        zkeeper.age = zookeeper.age;
        zkeeper.name = zookeeper.name;
        zkeeper.location = zookeeper.location;
        zkeeper.isActive = zookeeper.isActive;
        zookeeper.animals.forEach(animalId => {
            zkeeper.animals.push(new mongoose_2.Types.ObjectId(animalId));
        });
        const result = await zkeeper.save();
        return result;
    }
    async editZookeeper(id, zookeeper) {
        try {
            const zkeeper = await this.zookeeperModel.findById(id);
            zkeeper.age = zookeeper.age;
            zkeeper.name = zookeeper.name;
            zkeeper.location = zookeeper.location;
            zkeeper.isActive = zookeeper.isActive;
            zookeeper.animals.forEach(animalId => {
                if (zookeeper.animals.includes(animalId) === false) {
                    zkeeper.animals.push(new mongoose_2.Types.ObjectId(animalId));
                }
            });
            const result = await zkeeper.save();
            return result;
        }
        catch (error) {
            return error;
        }
    }
    async getAllZookeepeers() {
        return await this.zookeeperModel.find({});
    }
    async deleteZookeeper(id) {
        try {
            return await this.zookeeperModel.findByIdAndDelete(id);
        }
        catch (error) {
            return await error;
        }
    }
    getZookeeperById(id) {
        return this.zookeeperModel.findById(id).populate('animals');
    }
};
exports.ZookeeperService = ZookeeperService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Zookeeper')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ZookeeperService);
//# sourceMappingURL=zookeeper.service.js.map