import type { ComponentInfo } from '../types'

export interface Service {
  nameSpace: string
  getRandomInfo(): Promise<ComponentInfo>
}
