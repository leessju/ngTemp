import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private shareSource = new BehaviorSubject<string>('');
  currentMessage = this.shareSource.asObservable();

  constructor() { }

  changeMessage(msg: string) {
    this.shareSource.next(msg);
  }


}
