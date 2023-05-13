import { AbstractComponentWithStateServiceImpl } from '@/components/component-with-state'
import { delayAsync } from '@/helpers'
import { uniqueId } from 'lodash'

export class ComponentWithStateServiceImpl extends AbstractComponentWithStateServiceImpl {
  constructor(apiConfig: any) {
    super(apiConfig)
  }

  async fetchInfo(): Promise<string> {
    await delayAsync()
    return uniqueId('some-page-info ')
  }

  get nameSpace(): string {
    return 'some-component'
  }
}
