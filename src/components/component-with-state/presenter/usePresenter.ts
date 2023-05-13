import type { Service } from '../service/Service'
import { useComponentStore } from '../store'
import type { Presenter } from './Presenter'
import { PresenterImpl } from './PresenterImpl'

export const usePresenter = (service: Service): Presenter => {
  const store = useComponentStore(service.nameSpace)()
  return new PresenterImpl(store, service)
}
