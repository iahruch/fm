import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'
import { AlertInterface } from '../types/alert.interface'

@Injectable()
export class MessageService {
  private message$ = new Subject()

  setMessage(data: AlertInterface) {
    this.message$.next(data)
  }

  getMessage() {
    return this.message$.asObservable()
  }
}
