import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private applyLanguage = new Subject();
  private _selectedLanguage: string;
  public applyLanguage$ = this.applyLanguage.asObservable()

  constructor() { }

  public changeLanguage(lang: string) {
    this.applyLanguage.next(lang);
    this._selectedLanguage = lang;
  }

  get selectedLanguage(): string {
    return this._selectedLanguage;
  }
}
