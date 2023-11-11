import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AnimalService } from './animal.service';
import { CreateAnimalDto } from './dto/request/create-animal.dto';
import { EditAnimalDto } from './dto/request/edit-animal.dto';
import { IAnimal } from './animal.model';
import { Types } from 'mongoose';
import { AnimalResponseDto } from './dto/response/animal-response.dto';
import { IZookeeper } from 'src/zookeeper/zookeeper.model';
import { AssignAnimalsToZookeeeperDto } from './dto/request/assign-zookeeper.dto';

@Controller('/animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Post('/add')
  @UsePipes(ValidationPipe)
  addAnimal(@Body() animal: CreateAnimalDto): Promise<IAnimal> {
    return this.animalService.addAnimal(animal);
  }

  @Put('/:id')
  @UsePipes(ValidationPipe)
  editAnimal(
    @Body() animal: EditAnimalDto,
    @Param('id') id: Types.ObjectId,
  ): Promise<IAnimal> {
    return this.animalService.editAnimal(id, animal);
  }

  @Get('/getAll')
  getAllAnimals() {
    return this.animalService.getAllAnimals();
  }

  @Delete('/:id')
  deleteAnimal(@Param('id') id: Types.ObjectId) {
    return this.animalService.deleteAnimal(id);
  }

  @Get('/:id')
  getAnimalById(
    @Param('id') id: Types.ObjectId,
  ): Promise<IAnimal> {
    return this.animalService.getAnimalById(id);
  }

  @Post('/assign/:zookeeperId')
  @UsePipes(ValidationPipe)
  assignAnimalsToZookeeper(
    @Body() assignBody: AssignAnimalsToZookeeeperDto,
    @Param('zookeeperId') zookeeperId: Types.ObjectId,
  ): Promise<IZookeeper> {
    return this.animalService.assignAnimalsToZookeeper(zookeeperId, assignBody);
  }
}
