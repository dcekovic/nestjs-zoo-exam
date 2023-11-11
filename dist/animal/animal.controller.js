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
exports.AnimalController = void 0;
const common_1 = require("@nestjs/common");
const animal_service_1 = require("./animal.service");
const create_animal_dto_1 = require("./dto/request/create-animal.dto");
const edit_animal_dto_1 = require("./dto/request/edit-animal.dto");
const mongoose_1 = require("mongoose");
const assign_zookeeper_dto_1 = require("./dto/request/assign-zookeeper.dto");
let AnimalController = exports.AnimalController = class AnimalController {
    constructor(animalService) {
        this.animalService = animalService;
    }
    addAnimal(animal) {
        return this.animalService.addAnimal(animal);
    }
    editAnimal(animal, id) {
        return this.animalService.editAnimal(id, animal);
    }
    getAllAnimals() {
        return this.animalService.getAllAnimals();
    }
    deleteAnimal(id) {
        return this.animalService.deleteAnimal(id);
    }
    getAnimalById(id) {
        return this.animalService.getAnimalById(id);
    }
    assignAnimalsToZookeeper(assignBody, zookeeperId) {
        return this.animalService.assignAnimalsToZookeeper(zookeeperId, assignBody);
    }
};
__decorate([
    (0, common_1.Post)('/add'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_animal_dto_1.CreateAnimalDto]),
    __metadata("design:returntype", Promise)
], AnimalController.prototype, "addAnimal", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [edit_animal_dto_1.EditAnimalDto, mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], AnimalController.prototype, "editAnimal", null);
__decorate([
    (0, common_1.Get)('/getAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AnimalController.prototype, "getAllAnimals", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", void 0)
], AnimalController.prototype, "deleteAnimal", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], AnimalController.prototype, "getAnimalById", null);
__decorate([
    (0, common_1.Post)('/assign/:zookeeperId'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('zookeeperId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [assign_zookeeper_dto_1.AssignAnimalsToZookeeeperDto, mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], AnimalController.prototype, "assignAnimalsToZookeeper", null);
exports.AnimalController = AnimalController = __decorate([
    (0, common_1.Controller)('/animal'),
    __metadata("design:paramtypes", [animal_service_1.AnimalService])
], AnimalController);
//# sourceMappingURL=animal.controller.js.map