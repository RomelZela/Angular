import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  // Service functions
  setMessageFromServiceToParent(value: string) {
    this._messageToParent.next(value)
  }
  setMessageFromServiceToChild(value: string) {
    this._messageToChild.next(value)
  }


  // Observable functions
  messageObservableForChild() {
    return this._messageToChild.next('Child using subject')
  }

  messageObservableForParent() {
    return this._messageToParent.next('Parent using subject')
  }


  //Observable var
  private _messageObservableForChild = new Observable<string>((value) => {
    value.next('Child using subject')
  }
  )

  // Service var
  private _messageToChild = new Subject<string>();
  private _messageToParent = new Subject<string>();

  messageChild$ = this._messageToChild.asObservable();
  messageParent$ = this._messageToParent.asObservable();
}
