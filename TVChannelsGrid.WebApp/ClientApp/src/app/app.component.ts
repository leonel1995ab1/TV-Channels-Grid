import { Component, TemplateRef, ViewEncapsulation } from '@angular/core';
import { LanguageService } from 'src/services/language.service';
import { ErrorService } from 'src/services/error.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  errorPage: TemplateRef<any>;

  constructor(
    language: LanguageService,
    errorService: ErrorService
  ) {
    language.setStartLanguage('es');

    errorService.showErrorPage.subscribe(e => this.errorPage = e);
  }
}
