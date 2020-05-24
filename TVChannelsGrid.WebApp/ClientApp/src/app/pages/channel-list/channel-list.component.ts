import { Component, OnInit, ViewChild, OnDestroy, TemplateRef } from '@angular/core';
import { ChannelService } from 'src/services/channel.service';
import { ChannelData } from 'src/models/data/channel.data';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ExpandedChannel } from 'src/models/interfaces/expanded-channel.interface';
import { DomSanitizer } from '@angular/platform-browser';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { LanguageService } from 'src/services/language.service';
import { EN_CH_LIST } from 'src/assets/strings/english/channel-list';
import { SP_CH_LIST } from 'src/assets/strings/spanish/channel-list';
import { IChannelList } from 'src/assets/strings/interfaces/channel-list.interface';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ChannelSelected } from 'src/models/interfaces/channel-selected.interface';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ChannelListComponent implements OnInit, OnDestroy {
  strings: IChannelList;
  lang: string;
  channelList = new MatTableDataSource();
  channelTableColumns: string[];
  expandedChannel: ChannelData;
  expandedChannelDetails: ExpandedChannel = new ExpandedChannel();
  private unsubscribe = new Subject<any>();
  selectedChannels: ChannelSelected[] = [];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('removeConfirmation') removeConfirmation: TemplateRef<any>;

  constructor(
    private channelService: ChannelService,
    private _sanitizer: DomSanitizer,
    private language: LanguageService,
    private router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {
    this.channelTableColumns = ['checkbox', 'code', 'name', 'resolution', 'categoryName'];
    this.evaluateLanguage(this.language.selectedLanguage);
  }

  ngOnInit() {
    this.sort.direction = 'asc';
    this.sort.active = 'name';

    this.channelList.paginator = this.paginator;
    this.channelList.sort = this.sort;
    this.updatePaginatorLabels();

    this.getAll();

    this.language.applyLanguage$
    .pipe(takeUntil(this.unsubscribe))
    .subscribe((newLang: string) => {
      this.evaluateLanguage(newLang);
      this.updatePaginatorLabels();
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private getAll() {
    this.channelService.getAll()
    .pipe(takeUntil(this.unsubscribe))
    .subscribe((response: ChannelData[]) => {
      this.channelList.data = response;
    });
  }

  private evaluateLanguage(lang: string) {
    this.lang = lang;
    this.strings = lang == 'en' ? EN_CH_LIST : SP_CH_LIST;
  }

  private updatePaginatorLabels() {
    this.channelList.paginator._intl.itemsPerPageLabel = this.strings.pagItems;
    this.channelList.paginator._intl.previousPageLabel = this.strings.pagPrev;
    this.channelList.paginator._intl.nextPageLabel = this.strings.pagNext;

    this.channelList.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
      const start = page * pageSize + 1;
      const end = (page + 1) * pageSize;
      return `${start} - ${end} ${this.strings.pagOf} ${length} ${this.strings.pagTotal} ${page+1}`;
    };
    this.channelList.paginator._intl.changes.next();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.channelList.filter = filterValue.trim().toLowerCase();
  }

  showChannelDetails(channel: ChannelData) {
    this.expandedChannel = this.expandedChannel === channel ? null : channel;
    if(!this.expandedChannel) {
      setTimeout(() => {
        this.expandedChannelDetails = new ExpandedChannel();
      }, 500);
      return;
    }

    this.channelService.getById(channel.id).subscribe((response: ChannelData) => {
      this.expandedChannelDetails = {
        description: response.description,
        base64Logo: this._sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' + response.base64Logo),
        englishUrl: response.englishUrl,
        spanishUrl: response.spanishUrl
      };
    });
  }

  selectionChange(channel: ChannelData, e: {checked: boolean}) {
    if(e.checked) {
      this.selectedChannels.push({
        id: channel.id,
        name: channel.name
      });
    } else {
      this.selectedChannels = this.selectedChannels.filter(ch => ch.id != channel.id);
    }
  }

  edit() {
    this.router.navigate([`channel/${this.selectedChannels[0].id}`]);
  }

  remove() {
    this.dialog.open(this.removeConfirmation);
  }

  confirmRemove() {
    this.channelService.delete(this.selectedChannels)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(() => {
      this.selectedChannels = [];
      this.getAll();
      this.snackBar.open(this.strings.deleteComplete, null, {
        duration: 3000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });
    });
    this.closePopup();
  }

  closePopup() {
    this.dialog.closeAll();
  }

}
