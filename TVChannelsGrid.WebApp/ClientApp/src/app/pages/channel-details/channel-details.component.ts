import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryService } from 'src/services/category.service';
import { CategoryData } from 'src/models/data/category.data';
import { Resolutions } from 'src/enums/resolutions.enum';
import { ActivatedRoute } from '@angular/router';
import { ChannelService } from 'src/services/channel.service';
import { ChannelData } from 'src/models/data/channel.data';
import { Subject } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { LanguageService } from 'src/services/language.service';
import { EN_CH_DETAILS } from 'src/assets/strings/english/channel-details';
import { SP_CH_DETAILS } from 'src/assets/strings/spanish/channel-details';
import { IChannelDetails } from 'src/assets/strings/interfaces/channel-details.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-channel-details',
  templateUrl: './channel-details.component.html',
  styleUrls: ['./channel-details.component.scss']
})
export class ChannelDetailsComponent implements OnInit, OnDestroy {
  categories: CategoryData[];
  resolutions = [
    {
      code: Resolutions.SD,
      desc: 'SD'
    },
    {
      code: Resolutions.HD,
      desc: 'HD'
    },
    {
      code: Resolutions._4K,
      desc: '4K'
    },
    {
      code: Resolutions._3D,
      desc: '3D'
    }
  ];
  channelCode: string;
  channel: ChannelData;
  unsubscribe = new Subject<any>();
  strings: IChannelDetails;
  lang: string;
  channelForm: FormGroup;
  logo: string = '';
  showLogoError: boolean;
  showFieldError: boolean;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private channelService: ChannelService,
    private language: LanguageService,
    private snackBar: MatSnackBar
  ) { 
    this.categories = this.categoryService.categories;
    let code = this.route.snapshot.paramMap.get('code');
    if(code) {
      this.channelCode = code.toUpperCase();
    }

    this.evaluateLanguage(this.language.selectedLanguage);
    this.generateFormGroup();
  }

  ngOnInit(): void {
    if(this.channelCode) {
      this.channelService.getByCode(this.channelCode)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(resp => this.setChannelValues(resp));
    }

    this.language.applyLanguage$
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(newLang => this.evaluateLanguage(newLang));
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private setChannelValues(channel: ChannelData) {
    this.channel = channel;
    this.logo = 'data:image/png;base64,' + channel.base64Logo;
    this.channelForm.controls.code.setValue(channel.code);
    this.channelForm.controls.name.setValue(channel.name);
    this.channelForm.controls.desc.setValue(channel.description);
    this.channelForm.controls.esUrl.setValue(channel.spanishUrl);
    this.channelForm.controls.enUrl.setValue(channel.englishUrl);
    this.channelForm.controls.category.setValue(channel.categoryId);

    let resolutions: number[] = [];
    if(channel.isSD) resolutions.push(Resolutions.SD);
    if(channel.isHD) resolutions.push(Resolutions.HD);
    if(channel.is4K) resolutions.push(Resolutions._4K);
    if(channel.is3D) resolutions.push(Resolutions._3D);
    this.channelForm.controls.resolutions.setValue(resolutions);
  }

  private evaluateLanguage(lang: string) {
    this.lang = lang;
    this.strings = lang == 'en' ? EN_CH_DETAILS : SP_CH_DETAILS;
  }

  private generateFormGroup() {
    this.channelForm = new FormGroup({
      code: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      desc: new FormControl(),
      enUrl: new FormControl(),
      esUrl: new FormControl(),
      category: new FormControl(null, Validators.required),
      resolutions: new FormControl(null, Validators.required)
    });
  }

  save() {
    this.showLogoError = this.logo.length ? false: true;
    this.showFieldError = this.channelForm.valid ? false : true;

    if(this.showLogoError || this.showFieldError) return;

    let channelToSave: ChannelData = this.mapChannelToSave();

    if(this.channelCode) {
      this.channelService.update(channelToSave)
      .pipe(take(1))
      .subscribe(() => {
        this.showNotification('tst');
      });
    } else {
      this.channelService.create(channelToSave)
      .pipe(take(1))
      .subscribe(() => {
        this.showNotification('tst');
      });
    }
  }

  private mapChannelToSave(): ChannelData {
    let base64Logo = this.logo.replace("data:image/png;base64," , ""),
    isSD = false, isHD = false, is4K = false, is3D = false;

    this.channelForm.controls.resolutions.value.forEach((resId: number) => {
      switch(resId) {
        case Resolutions.SD:
          isSD = true;
          break;
        case Resolutions.HD:
          isHD = true;
          break;
        case Resolutions._3D:
          is3D = true;
          break;
        case Resolutions._4K:
          is4K = true;
          break;
      }
    });

    return {
      code: this.channelForm.controls.code.value.toUpperCase(),
      name: this.channelForm.controls.name.value,
      description: this.channelForm.controls.desc.value,
      categoryId: this.channelForm.controls.category.value,
      englishUrl: this.channelForm.controls.enUrl.value,
      spanishUrl: this.channelForm.controls.esUrl.value,
      base64Logo: base64Logo,
      isSD: isSD,
      isHD: isHD,
      is3D: is3D,
      is4K: is4K
    }
  }

  private showNotification(text: string) {
    this.snackBar.open(text, null, {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

}