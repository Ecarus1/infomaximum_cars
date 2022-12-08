/**
 * Функция для форматирования цены (Будте граматно работать если сервера уже подразумевается цена с учётом валюты)
 * @param price - цена
 * @returns 
 */
export function formatPrice(price: string) {
  if(price) {
    const currency = price[0];
    const result = currency + Number(price.slice(1)).toLocaleString()
    return result
  }
}