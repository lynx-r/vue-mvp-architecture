import { useService } from '../service/useService'
import { useMarketplaceStore } from '../store'
import type { Presenter } from './Presenter'
import { PresenterImpl } from './PresenterImpl'

let PRESENTER: Presenter | null = null

export const usePresenter = (): Presenter => {
  if (!PRESENTER) {
    const store = useMarketplaceStore()
    const service = useService({})
    PRESENTER = new PresenterImpl(store, service)
  }
  return PRESENTER
}
