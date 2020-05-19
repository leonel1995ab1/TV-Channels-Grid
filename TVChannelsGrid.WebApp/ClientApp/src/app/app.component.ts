import { Component } from '@angular/core';
import { LanguageService } from 'src/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(language: LanguageService) {
    language.setStartLanguage('es');
  }
}
