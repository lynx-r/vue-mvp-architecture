import type { ComponentInfo } from '../types'
import type { Service } from './Service'

export abstract class AbstractServiceImpl implements Service {
  constructor(_apiConfig: any) {}

  getRandomInfo(): Promise<ComponentInfo> {
    return this.fetchInfo()
  }

  abstract fetchInfo(): Promise<ComponentInfo>
  abstract get nameSpace(): string
}
