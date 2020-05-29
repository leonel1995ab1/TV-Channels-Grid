import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChannelData } from 'src/models/data/channel.data';
import { ChannelSelected } from 'src/models/interfaces/channel-selected.interface';

const BASE_URL = 'api/channel/';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ChannelData[]> {
    return this.http.get<ChannelData[]>(`${BASE_URL}getAll`, {reportProgress: true});
  }

  getById(id: number): Observable<ChannelData> {
    return this.http.get<ChannelData>(`${BASE_URL}getById?id=` + id, { reportProgress: false });
  }

  create(channel: ChannelData): Observable<number> {
    return this.http.post<number>(`${BASE_URL}create`, channel, {reportProgress: true});
  }

  update(channel: ChannelData): Observable<number> {
    return this.http.post<number>(`${BASE_URL}update`, channel, {reportProgress: true});
  }

  delete(channels: ChannelSelected[]): Observable<number> {
    return this.http.post<number>(`${BASE_URL}delete`, channels, {reportProgress: true});
  }
}
