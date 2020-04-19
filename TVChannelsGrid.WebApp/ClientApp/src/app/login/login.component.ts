import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { EN_HEADER } from 'src/assets/strings/english/header';
import { SP_HEADER } from 'src/assets/strings/spanish/header';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  headerLanguage: any;

  constructor() { }

  ngOnInit(): void {
  }

  changeLanguage(event: MatSelectChange) {
    switch(event.value) {
      case 'en':
        this.headerLanguage = EN_HEADER;
        break;
      case 'sp':
        this.headerLanguage = SP_HEADER;
        break;
    }
  }

}
