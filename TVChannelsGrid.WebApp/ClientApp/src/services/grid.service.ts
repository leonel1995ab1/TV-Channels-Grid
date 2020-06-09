import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GirdListData } from 'src/models/data/grid-list.data';
import { Observable } from 'rxjs';

const BASE_URL = 'api/grid/';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  constructor(private http: HttpClient) { }

  getList(): Observable<GirdListData[]> {
    return this.http.get<GirdListData[]>(`${BASE_URL}getList`, {reportProgress: false});
  }
}
