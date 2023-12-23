import { ObserverEmitter } from '@esliph/observer'
import { ConsoleEvents } from './events'

export class ConsoleObserverEmitter extends ObserverEmitter<ConsoleEvents> {
    constructor() {
        super({ context: 'Console' })
    }
}