import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  private subject = new Subject<any>()

  constructor() {
  }

  confirmThis(message: string, yesFn: () => void, noFn: () => void): any {
    this.setConfirmation(message, yesFn, noFn)
  }

  private setConfirmation(message: string, yesFn: () => void, noFn: () => void) {
    const that = this;
    this.subject.next({
      type: 'confirm',
      text: message,
      yesFn(): any {
        that.subject.next()
        yesFn()
      },
      noFn(): any {
        that.subject.next()
        noFn()
      }
    })
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
