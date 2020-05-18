import { Component } from '@angular/core';
import { IImageUpload } from 'src/assets/strings/interfaces/image-upload.interface';
import { LanguageService } from 'src/services/language.service';
import { SP_IMAGE_UPLOAD } from 'src/assets/strings/spanish/image-upload';
import { EN_IMAGE_UPLOAD } from 'src/assets/strings/english/image-upload';
import { PopupService } from 'src/services/popup.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})

export class ImageUploadComponent {
  strings: IImageUpload;
  lang: string;

  borderColor: string;
  iconColor: string;
  activeColor: string = 'green';
  baseColor: string = '#ccc';
  overlayColor: string = 'rgba(255,255,255,0.5)';
  
  dragging: boolean = false;
  loaded: boolean = false;
  imageLoaded: boolean = false;
  imageSrc: string = '';

  constructor(
    private language: LanguageService,
    private popup: PopupService
  ) {
    //Set spanish by default
    this.lang = 'es';
    this.strings = SP_IMAGE_UPLOAD;

    this.language.applyLanguage$.subscribe((newLang: string) => {
      this.evaluateLanguage(newLang);
    });
  }

  private evaluateLanguage(lang: string) {
    this.lang = lang;
    this.strings = lang == 'en' ? EN_IMAGE_UPLOAD : SP_IMAGE_UPLOAD;
  }

  handleDragEnter() {
      this.dragging = true;
  }
  
  handleDragLeave() {
      this.dragging = false;
  }
  
  handleDrop(e: any) {
      e.preventDefault();
      this.dragging = false;
      this.handleInputChange(e);
  }
  
  handleImageLoad() {
      this.imageLoaded = true;
      this.iconColor = this.overlayColor;
  }

  handleInputChange(e: any) {
      let files = e.dataTransfer ? e.dataTransfer.files : e.target.files;
      if(files.length > 1) {
        this.popup.show({
          title: 'Error',
          content: this.strings.multipleFilesValidation,
          buttons: []
        });
        return;
      }

      let file = files[0];
      if (!file.type.match('image/png')) {
        this.popup.show({
          title: 'Error',
          content: this.strings.invalidFormatValidation,
          buttons: []
        });
        return;
      }

      let reader = new FileReader();
      this.loaded = false;

      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsDataURL(file);
  }
  
  handleReaderLoaded(e: any) {
      this.imageSrc = e.target.result;
      this.loaded = true;
  }

  upload() {
    document.getElementById('uploadedInput').click();
  }

}
