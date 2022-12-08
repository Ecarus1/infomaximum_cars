import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Car {
  @Field(() => Int, { description: 'Уникальный id автомобиля' })
  id: number;

  @Field(() => String, { description: 'Марка автомобиля' })
  brand: string;

  @Field(() => String, { description: 'Модель автомобиля' })
  model: string;

  @Field(() => String, { description: 'Цвет автомобиля' })
  color: string;

  @Field(() => Int, { description: 'Год выпуска модели автомобиля' })
  model_year: number;

  @Field(() => String, { description: 'Фото автомобиля' })
  img_src: string;

  @Field(() => String, { description: 'Цена автомобиля' })
  price: string;

  @Field(() => String, { description: 'Краткое описание автомобиля' })
  description: string;

  @Field(() => Boolean, { description: 'Наличие автомобиля' })
  availability: boolean;
}
