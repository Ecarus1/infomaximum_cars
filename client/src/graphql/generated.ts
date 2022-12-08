export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Car = {
  __typename?: "Car";
  /** Наличие автомобиля */
  availability: Scalars["Boolean"];
  /** Марка автомобиля */
  brand: Scalars["String"];
  /** Цвет автомобиля */
  color: Scalars["String"];
  /** Краткое описание автомобиля */
  description: Scalars["String"];
  /** Уникальный id автомобиля */
  id: Scalars["Int"];
  /** Фото автомобиля */
  img_src: Scalars["String"];
  /** Модель автомобиля */
  model: Scalars["String"];
  /** Год выпуска модели автомобиля */
  model_year: Scalars["Int"];
  /** Цена автомобиля */
  price: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  /** Получить автомобиль по id */
  car?: Maybe<Car>;
  /** Получить все автомобили */
  cars: Array<Car>;
};

export type QueryCarArgs = {
  id: Scalars["Int"];
};

export type QueryCarsArgs = {
  search?: InputMaybe<Scalars["String"]>;
};
