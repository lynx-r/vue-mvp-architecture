import { Shop, Stock } from '../types'

export interface Presenter {
  shops: Shop[]

  addShop(shop: Shop): void
  addRandomShop(): void

  stocks: Stock[]

  addStock(stock: Stock): void
  addRandomStock(): void
}
