import { Injectable, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  showErrorPage = new Subject<TemplateRef<any>>();

  constructor() { }

  setErrorPage(errorPage: TemplateRef<any>) {
    this.showErrorPage.next(errorPage);
  }
}
