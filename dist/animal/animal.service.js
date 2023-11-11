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
exports.AnimalService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let AnimalService = exports.AnimalService = class AnimalService {
    constructor(animalModel, zookeeperModel) {
        this.animalModel = animalModel;
        this.zookeeperModel = zookeeperModel;
    }
    async addAnimal(animal) {
        const newAnimal = new this.animalModel({});
        newAnimal.name = animal.name;
        newAnimal.type = animal.type;
        newAnimal.age = animal.age;
        newAnimal.location = animal.location;
        newAnimal.gender = animal.gender;
        newAnimal.characteristics = animal.characteristics;
        newAnimal.zookeeper = animal.zookeeperId;
        const updatedAnimal = (await newAnimal.save());
        const zookeeper = await this.zookeeperModel.findById(animal.zookeeperId);
        zookeeper.animals.push((await updatedAnimal).id);
        zookeeper.save();
        return updatedAnimal.populate('zookeeper');
    }
    editAnimal(id, animal) {
        try {
            return this.animalModel.findByIdAndUpdate(id, animal);
        }
        catch (error) {
            return error;
        }
    }
    getAllAnimals() {
        return this.animalModel.find({});
    }
    async deleteAnimal(id) {
        return await this.animalModel.findByIdAndDelete(id);
    }
    getAnimalById(id) {
        return this.animalModel.findById(id).populate('zookeeper');
    }
    async assignAnimalsToZookeeper(zookeeperId, assignBody) {
        const zookeeper = await this.zookeeperModel.findById(zookeeperId);
        let missing = assignBody.animals.filter(item => zookeeper.animals.indexOf(item) < 0);
        missing.forEach(animalId => {
            zookeeper.animals.push(new mongoose_2.Types.ObjectId(animalId));
        });
        zookeeper.save();
        const linkedAnimals = await this.animalModel.find({
            '_id': {
                $in: [
                    assignBody.animals
                ]
            }
        });
        linkedAnimals.forEach(animal => {
            animal.zookeeper = zookeeperId;
            animal.save();
        });
        return zookeeper.populate('animals');
    }
};
exports.AnimalService = AnimalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Animal')),
    __param(1, (0, mongoose_1.InjectModel)('Zookeeper')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], AnimalService);
//# sourceMappingURL=animal.service.js.map