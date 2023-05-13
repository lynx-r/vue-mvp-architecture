import { useMarketplaceStore } from '../store'
import { Presenter } from './Presenter'
import { PresenterImpl } from './PresenterImpl'

let PRESENTER: Presenter = null

export const usePresenter = (): Presenter => {
  const store = useMarketplaceStore()

  if (!PRESENTER) {
    PRESENTER = new PresenterImpl(store)
  }
  return PRESENTER
}
