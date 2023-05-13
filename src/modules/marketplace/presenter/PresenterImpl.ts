import { PresenterStoreAdapter } from '@/core/PresenterStoreAdapter'
import { UpdatableState } from '@/core/UpdatableState'
import { Shop, State, Stock } from '../types'
import { Presenter } from './Presenter'

export class PresenterImpl extends PresenterStoreAdapter<State> implements Presenter {
  constructor(store: UpdatableState<State>) {
    super(store)
  }

  get shops() {
    return this.state.shops
  }

  addShop(shop: Shop): void {
    const shops = [...this.state.shops, shop]
    this.updateState({ shops })
  }

  addRandomShop(): void {
    const shop: Shop = {
      shopId: (Math.random() * 100) % 100,
      shopName: String((Math.random() * 100) % 100)
    }
    const shops = [...this.state.shops, shop]
    this.updateState({ shops })
  }

  get stocks() {
    return this.state.stocks
  }

  addStock(stock: Stock): void {
    const stocks = [...this.state.stocks, stock]
    this.updateState({ stocks })
  }

  addRandomStock(): void {
    const stock: Stock = {
      capacity: (Math.random() * 100) % 100,
      address: String((Math.random() * 100) % 100)
    }
    const stocks = [...this.state.stocks, stock]
    this.updateState({ stocks })
  }
}
