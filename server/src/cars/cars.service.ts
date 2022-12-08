import { Injectable } from '@nestjs/common';
import carsJSON from './cars.json';
import { Car } from './entities/car.entity';

@Injectable()
export class CarsService {
  findAll(search?: string) {
    if (search) {
      return carsJSON.filter((car) =>
        `${car.brand} ${car.model}`
          .toLowerCase()
          .includes(search.toLowerCase()),
      );
    }

    return carsJSON;
  }

  findOne(id: number): Car | undefined {
    return carsJSON.find((car) => car.id === id);
  }
}
