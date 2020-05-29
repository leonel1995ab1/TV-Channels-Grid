import { Component } from '@angular/core';
import { LoadingService } from 'src/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  show: boolean;

  constructor(
    private loadingService: LoadingService
  ) { 
    this.loadingService.setLoading$.subscribe(bool => this.show = bool);
  }
}
