import { makeAutoObservable, toJS } from "mobx";
import {request, gql} from "graphql-request";
import { Query } from "../graphql/generated";

class Catalog {
  items = [] as Query['cars'];    // Массив объектов избранных машин
  ids: Array<number> = [];        // Массив id'шников избранных машин
  count = 0;                      // Количество избранных машин
  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Метод для запроса определённой машины по его ID
   * @param id - Id'шник определённой машины
   * @returns void
   */
  async fetchCar(id: number) {
    if(this.findItem(id)) return;
    const query = gql`
      query ($id: Int!) {
        car (id: $id) {
          id,
          brand,
          model,
          color,
          model_year,
          img_src,
          price,
          description,
          availability
        }
      }
    `

    const variables = {
      id: id
    }

    await request('http://localhost:4000/api', query, variables).then((data) => this.items.push(data.car));
  }

  /**
   * Метод для добавление товара в избранные 
   * Если id товара уже существует в массиву ID'шников, то мы удаляем его из списка
   * @param id - ID'шник машины
   */
  pushCarId(id: number) {
    if(id && !this.ids.includes(id)) {
      this.count += 1;
      this.ids.push(id);
    } else {
      this.deleteCarFacorites(id);
    }
  }
  
  /**
   * Метод для удаления машины
   * @param id - ID'шник машины
   */
  deleteCarFacorites(id: number): void {
    this.deleteCar(id);
  }

  /**
   * Приватный метод для удаления машины
   * @param id - ID'шник машины
   */
  private deleteCar(id: number): void {
    this.count -= 1;
    this.ids = this.ids.filter(item => item !== id);
    const item = this.findItem(id);
    if(item) {
      const index = this.items.indexOf(item);
      this.items.splice(index, 1);
    }
  }

  /**
   * Метод для нахождения машины в списке объектов
   * @param id - ID'шник машины
   * @returns Обект машины
   */
  private findItem(id: number): Query['car'] {
    const item = this.items.find(item => item.id === id)
    return item;
  }

  /**
   * Получение автомобилей из избранных
   */
  get getFavorites() {
    return toJS(this.items);
  }

  /**
   * Получение массива id'шников избранных машин
   */
  get getIds() {
    return toJS(this.ids);
  }

  /**
   * Получение количсетва избранных позиций
   */
  get getCount() {
    return this.count;
  }
}

export default new Catalog();