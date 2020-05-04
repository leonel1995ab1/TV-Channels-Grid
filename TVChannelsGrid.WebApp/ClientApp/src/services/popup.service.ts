import { Injectable } from '@angular/core';
import { Popup } from 'src/models/interfaces/popup.interface';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private _show = new Subject();
  public show$ = this._show.asObservable();

  constructor() { }

  show(data: Popup) {debugger
    this._show.next(data);
  }
}
