import { makeAutoObservable, toJS} from "mobx";
import {request, gql} from "graphql-request";
import { Query } from "../graphql/generated";

class Catalog {
  items = [] as Query['cars'];          // Массив машин
  sort = "availability";                // Тип сортировки
  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Метод инициализации получения всех автомобилей
   */
  async init() {
    const query = gql`
      query {
        cars {
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

    await request('http://localhost:4000/api', query).then((data) => this.items = data.cars);
  }

  /**
   * Получение машин
   */
  get getCars() {
    return toJS(this.items);
  }

  /**
   * Получение типа сортировки
   */
  get getSort() {
    return this.sort;
  }

  /**
   * Метод для определения сортировки
   * @param sortAtr Параметр сортировка
   */
  sorting(sortAtr: string = this.sort) {
    this.sort = sortAtr
    console.log('dddd');
    switch (sortAtr) {
      case 'availability':
        this.sortAvailability();
        break;

      case '+name':
        this.sortNameAZ();
        break;

      case '-name':
        this.sortNameZA();
        break;

      case '+year':
        this.sortYearIncrease();
        break;

      case '-year':
        this.sortYearDescending();
        break;

      case '-price':
        this.sortPriceIncrease();
        break;

      case '+price':
        this.sortPriceDescending();
        break;
    }
  }

  /**
   * Сортировка по наличию товара
   */
  sortAvailability() {
    this.items = this.items.sort((a, b) => +b.availability - +a.availability);
  }

  /**
   * Сортировка по афлавиту (A-Z)
   */
  sortNameAZ() {
    this.items = this.items.sort((a, b) => a?.brand.localeCompare(b?.brand));
  }

  /**
   * Сортировка по афлавиту (Z-A)
   */
  sortNameZA() {
    this.items = this.items.sort((a, b) => b?.brand.localeCompare(a?.brand));
  }

  /**
   * Сортировка по самым молодым моделям
   */
  sortYearIncrease() {
    this.items = this.items.sort((a, b) => Number(b.model_year) - Number(a.model_year));
  }

    /**
   * Сортировка по самым старым моделям
   */
  sortYearDescending() {
    this.items = this.items.sort((a, b) => Number(a.model_year) - Number(b.model_year));
  }

  /**
   * Сортировка по самым дорогим моделям
   */
  sortPriceIncrease() {
    this.items = this.items.sort((a, b) => Number(a.price.slice(1)) - Number(b.price.slice(1)));
  }

  /**
   * Сортировка по самым дешёвым моделям
   */
  sortPriceDescending() {
    this.items = this.items.sort((a, b) => Number(b.price.slice(1)) - Number(a.price.slice(1)));
  }

  /**
   * Метод для запроса автомобилей строке
   * @param search - Это страка запроса
   */
  async searchFilter(search: string) {
    const query = gql`
      query ($search: String!) {
        cars (search: $search) {
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
      search: search
    }

    await request('http://localhost:4000/api', query, variables).then((data) => this.items = data.cars);
    this.sorting();
  }
}

export default new Catalog();