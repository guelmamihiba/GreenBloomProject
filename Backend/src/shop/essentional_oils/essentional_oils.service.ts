import { Injectable } from '@nestjs/common';
import { CreateEssentialOilsDto } from './create-essentional_oils.dto';
import { UpdateEssentialOilsDto } from './update-essentional_oils.dto';
import { EssentialOil } from './essentional_oils.entity';

@Injectable()
export class EssentialOilsService {
  private essentialOils: EssentialOil[] = [];

  create(createEssentialOilsDto: CreateEssentialOilsDto): EssentialOil {
    const newEssentialOil = { id: Date.now(), ...createEssentialOilsDto };
    this.essentialOils.push(newEssentialOil);
    return newEssentialOil;
  }

  findAll(): EssentialOil[] {
    return this.essentialOils;
  }

  findOne(id: number): EssentialOil | null {
    return this.essentialOils.find(item => item.id === id) || null;
  }

  update(id: number, updateEssentialOilsDto: UpdateEssentialOilsDto): EssentialOil | null {
    const index = this.essentialOils.findIndex(item => item.id === id);
    if (index > -1) {
      this.essentialOils[index] = { ...this.essentialOils[index], ...updateEssentialOilsDto };
      return this.essentialOils[index];
    }
    return null;
  }

  remove(id: number): boolean {
    const index = this.essentialOils.findIndex(item => item.id === id);
    if (index > -1) {
      this.essentialOils.splice(index, 1);
      return true;
    }
    return false;
  }
}
