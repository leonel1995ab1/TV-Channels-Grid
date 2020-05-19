import { Component, Input, Output, DoCheck, EventEmitter, OnDestroy } from '@angular/core';
import { IImageUpload } from 'src/assets/strings/interfaces/image-upload.interface';
import { LanguageService } from 'src/services/language.service';
import { SP_IMAGE_UPLOAD } from 'src/assets/strings/spanish/image-upload';
import { EN_IMAGE_UPLOAD } from 'src/assets/strings/english/image-upload';
import { PopupService } from 'src/services/popup.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})

export class ImageUploadComponent implements DoCheck, OnDestroy {
  strings: IImageUpload;
  lang: string;
  unsubscribe = new Subject<any>();

  borderColor: string;
  iconColor: string;
  activeColor: string = 'green';
  baseColor: string = '#ccc';
  overlayColor: string = 'rgba(255,255,255,0.5)';
  
  dragging: boolean = false;
  loaded: boolean = false;
  imageLoaded: boolean = false;
  
  @Input() imageSrc: string;
  @Output() imageSrcChange = new EventEmitter();

  constructor(
    private language: LanguageService,
    private popup: PopupService
  ) {
    this.evaluateLanguage(this.language.selectedLanguage);

    this.language.applyLanguage$
    .pipe(takeUntil(this.unsubscribe))
    .subscribe((newLang: string) => {
      this.evaluateLanguage(newLang);
    });
  }

  ngDoCheck() {
    this.imageSrcChange.emit(this.imageSrc);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
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
