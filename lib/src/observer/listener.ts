import { ObserverListener } from '@esliph/observer'
import { ConsoleEvents } from './events'

export class ConsoleObserverListener extends ObserverListener<ConsoleEvents> {
    constructor() {
        super({ context: 'Console' })
    }
}