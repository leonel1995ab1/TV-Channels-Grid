import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryService } from 'src/services/category.service';
import { CategoryData } from 'src/models/data/category.data';
import { Resolutions } from 'src/enums/resolutions.enum';
import { ActivatedRoute } from '@angular/router';
import { ChannelService } from 'src/services/channel.service';
import { ChannelData } from 'src/models/data/channel.data';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
  channelId: number;
  channel: ChannelData;
  unsubscribe = new Subject<any>();

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private channelService: ChannelService
  ) { 
    this.categories = this.categoryService.categories;
    this.channelId = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    if(this.channelId) {
      this.channelService.getChannelById(this.channelId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(resp => this.channel = resp);
    }
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}