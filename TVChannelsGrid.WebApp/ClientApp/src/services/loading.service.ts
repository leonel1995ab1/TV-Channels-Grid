import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private showLoading$ = new Subject<boolean>();
  readonly setLoading$ = this.showLoading$.asObservable();

  constructor() { }

  show() {
    this.showLoading$.next(true);
  }

  hide() {
    this.showLoading$.next(false);
  }
}
