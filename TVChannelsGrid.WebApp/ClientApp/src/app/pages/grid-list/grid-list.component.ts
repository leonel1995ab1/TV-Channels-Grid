import { Component, OnInit, OnDestroy } from '@angular/core';
import { GirdListData } from 'src/models/data/grid-list.data';
import { GridService } from 'src/services/grid.service';
import { take, takeUntil } from 'rxjs/operators';
import { LanguageService } from 'src/services/language.service';
import { IGridList } from 'src/assets/strings/interfaces/grid-list.interface';
import { EN_GRID_LIST } from 'src/assets/strings/english/grid-list';
import { SP_GRID_LIST } from 'src/assets/strings/spanish/grid-list';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent implements OnInit, OnDestroy {
  gridTableColumns: string[];
  grids: GirdListData[];
  strings: IGridList;
  private unsubscribe = new Subject<any>();

  constructor(
    private gridService: GridService,
    private language: LanguageService
  ) { 
    this.gridTableColumns =  ['gridName', 'createdOn', 'modifiedOn'];
    this.evaluateLanguage(this.language.selectedLanguage);
  }

  ngOnInit() {
    this.gridService.getList()
    .pipe(take(1))
    .subscribe(rsp => this.grids = rsp);

    this.language.applyLanguage$
    .pipe(takeUntil(this.unsubscribe))
    .subscribe((newLang: string) => {
      this.evaluateLanguage(newLang);
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private evaluateLanguage(lang: string) {
    if(lang == 'en') {
      this.strings = EN_GRID_LIST;
    } else {
      this.strings = SP_GRID_LIST;
    }
  }

}
