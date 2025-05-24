import { Injectable } from '@nestjs/common';

interface Train {
  id: number;
  from: string;
  to: string;
  departure: string;
  arrival: string;
}

@Injectable()
export class TrainsService {
  private trains: Train[] = [];
  private idCounter = 1;

  findAll() {
    return this.trains;
  }

  findOne(id: number) {
    return this.trains.find(t => t.id === id);
  }

  create(data: Omit<Train, 'id'>) {
    const train = { id: this.idCounter++, ...data };
    this.trains.push(train);
    return train;
  }

  update(id: number, data: Partial<Train>) {
    const train = this.findOne(id);
    if (!train) return null;
    Object.assign(train, data);
    return train;
  }

  delete(id: number) {
    this.trains = this.trains.filter(t => t.id !== id);
    return { deleted: true };
  }
}