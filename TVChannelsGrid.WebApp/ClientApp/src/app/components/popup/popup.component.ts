import { Component, OnInit, ViewChild } from '@angular/core';
import { PopupService } from 'src/services/popup.service';
import { Popup } from 'src/models/interfaces/popup.interface';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @ViewChild('popup') private popupTempRef;

  constructor(private popupService: PopupService) { }

  ngOnInit(): void {
    this.popupService.show$.subscribe((data: Popup) => {
      console.log(data);
    });
  }

}
