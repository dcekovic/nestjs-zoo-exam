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
import { ZookeeperService } from './zookeeper.service';
import { EditZookeeperDto } from './dto/request/edit-zookeeper.dto';
import { IZookeeper } from './zookeeper.model';
import { Types } from 'mongoose';
import { CreateZookeeperDto } from './dto/request/create-zookeeper.dto';

@Controller('/zookeeper')
export class ZookeeperController {
  constructor(private readonly zookeeperService: ZookeeperService) {}

  @Post('/add')
  @UsePipes(ValidationPipe)
  addZookeeper(@Body() zookeeper: CreateZookeeperDto): Promise<IZookeeper> {
    return this.zookeeperService.addZookeeper(zookeeper);
  }

  @Put('/:id')
  @UsePipes(ValidationPipe)
  editZookeeper(
    @Body() zookeeper: EditZookeeperDto,
    @Param('id') id: Types.ObjectId,
  ): Promise<IZookeeper> {
    return this.zookeeperService.editZookeeper(id, zookeeper);
  }

  @Get('/getAll')
  getAllZookeepers() {
    return this.zookeeperService.getAllZookeepeers();
  }

  @Delete('/:id')
  deleteZookeeper(@Param('id') id: Types.ObjectId) {
    return this.zookeeperService.deleteZookeeper(id);
  }

  @Get('/:id')
  getZookeeperById(
    @Param('id') id: Types.ObjectId
  ): Promise<IZookeeper> {
    return this.zookeeperService.getZookeeperById(id);
  }
}
