import { Injectable } from '@nestjs/common';
import { CreateHomewareDto } from './create-home_ware_decor.dto';
import { UpdateHomewareDto } from './update-home_ware_decor.dto';
import { Homeware } from './home_ware_decor.entity';

@Injectable()
export class HomewareService {
  private homeware: Homeware[] = [];

  create(createHomewareDto: CreateHomewareDto): Homeware {
    const newHomeware = { id: Date.now(), ...createHomewareDto };
    this.homeware.push(newHomeware);
    return newHomeware;
  }

  findAll(): Homeware[] {
    return this.homeware;
  }

  findOne(id: number): Homeware | null {
    return this.homeware.find(item => item.id === id) || null;
  }

  update(id: number, updateHomewareDto: UpdateHomewareDto): Homeware | null {
    const index = this.homeware.findIndex(item => item.id === id);
    if (index > -1) {
      this.homeware[index] = { ...this.homeware[index], ...updateHomewareDto };
      return this.homeware[index];
    }
    return null;
  }

  remove(id: number): boolean {
    const index = this.homeware.findIndex(item => item.id === id);
    if (index > -1) {
      this.homeware.splice(index, 1);
      return true;
    }
    return false;
  }
}
