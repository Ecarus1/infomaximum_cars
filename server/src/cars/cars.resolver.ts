import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { CarsService } from './cars.service';
import { Car } from './entities/car.entity';

@Resolver(() => Car)
export class CarsResolver {
  constructor(private readonly carsService: CarsService) {}

  @Query(() => [Car], { name: 'cars', description: 'Получить все автомобили' })
  findAll(
    @Args('search', { type: () => String, nullable: true }) search?: string,
  ) {
    return this.carsService.findAll(search);
  }

  @Query(() => Car, {
    name: 'car',
    nullable: true,
    description: 'Получить автомобиль по id',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.carsService.findOne(id);
  }
}
