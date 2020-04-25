import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public applyLanguage = new EventEmitter();
  private selectedLanguage: string;

  constructor() { }

  public changeLanguage(lang: string) {
    this.applyLanguage.emit(lang);
    this.selectedLanguage = lang;
  }

  public getLanguage(): string {
    return this.selectedLanguage;
  }
}
