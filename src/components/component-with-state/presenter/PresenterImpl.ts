import { PresenterStoreAdapter } from '@/core/PresenterStoreAdapter'
import type { UpdatableState } from '@/core/UpdatableState'
import type { Service } from '../service/Service'
import type { State } from '../types'
import type { Presenter } from './Presenter'

export class PresenterImpl extends PresenterStoreAdapter<State> implements Presenter {
  constructor(store: UpdatableState<State>, private service: Service) {
    super(store)
  }

  get info() {
    return this.state.info
  }

  async onUpdateInfo() {
    const info = await this.service.getRandomInfo()
    this.updateState({ info })
  }
}
