import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ChannelService } from 'src/services/channel.service';
import { ChannelData } from 'src/models/channel-data';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss']
})
export class ChannelListComponent implements OnInit {
  img: SafeResourceUrl;

  constructor(
    private channelService: ChannelService,
    private _sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.channelService.getChannels().subscribe((data: ChannelData[]) => {
      this.img = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' 
                 + data[0].base64Logo);
    });
  }

}
