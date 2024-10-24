import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EssentialOilsService } from './essentional_oils.service';
import { CreateEssentialOilsDto } from './create-essentional_oils.dto';
import { UpdateEssentialOilsDto } from './update-essentional_oils.dto';

@Controller('essential-oils')
export class EssentialOilsController {
  constructor(private readonly essentialOilsService: EssentialOilsService) {}

  @Post()
  create(@Body() createEssentialOilsDto: CreateEssentialOilsDto) {
    return this.essentialOilsService.create(createEssentialOilsDto);
  }

  @Get()
  findAll() {
    return this.essentialOilsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.essentialOilsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEssentialOilsDto: UpdateEssentialOilsDto) {
    return this.essentialOilsService.update(+id, updateEssentialOilsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.essentialOilsService.remove(+id);
  }
}
