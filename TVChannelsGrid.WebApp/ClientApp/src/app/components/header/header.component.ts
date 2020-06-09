import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { LanguageService } from 'src/services/language.service';
import { IHeader } from 'src/assets/strings/interfaces/header.interface';
import { EN_HEADER } from 'src/assets/strings/english/header';
import { SP_HEADER } from 'src/assets/strings/spanish/header';
import { MatDialog } from '@angular/material/dialog';
import { ComingSoonComponent } from '../coming-soon/coming-soon.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  strings: IHeader;
  menuSelected: number;

  constructor(
    private language: LanguageService,
    public dialog: MatDialog,
    private router: Router
  ) { 
    this.strings = this.language.selectedLanguage == 'en' ? EN_HEADER : SP_HEADER;
    
    let path = window.location.pathname;
    if(path.includes('grid')) {
      this.menuSelected = 2;
    } else {
      this.menuSelected = 1;
    }
  }

  languageChange(e: MatSelectChange) {
    this.language.changeLanguage(e.value);
    this.strings = e.value == 'en' ? EN_HEADER : SP_HEADER;
  }

  changeMenuSelected(menu: number) {
    this.menuSelected = menu;
    switch(menu) {
      case 1:
        this.router.navigate(['/channels']);
        break;
      case 2:
        this.router.navigate(['/grids']);
        break;
      default:
        this.dialog.open(ComingSoonComponent);
        break;
    }
  }
}
