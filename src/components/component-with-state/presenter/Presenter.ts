import type { ComponentInfo } from '../types'

export interface Presenter {
  info: ComponentInfo

  onUpdateInfo(): void
}
