import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/services/language.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent {
  title: string;
  content: string;

  constructor(
    private language: LanguageService,
    private dialogRef: MatDialogRef<ComingSoonComponent>
  ) { 
    let lang = this.language.getLanguage();
    if(lang == 'en') {
      this.title = "Coming Soon...";
      this.content = "This feature is in development. It will be ready soon."
    } else {
      this.title = "Proximamente";
      this.content = "Esta funcionalidad esta en desarrollo. En breve estara disponible."
    }
  }

  close() {
    this.dialogRef.close();
  }
}
