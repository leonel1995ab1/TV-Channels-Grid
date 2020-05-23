import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChannelData } from 'src/models/data/channel.data';

const BASE_URL = 'api/channel/';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ChannelData[]> {
    return this.http.get<ChannelData[]>(`${BASE_URL}getAll`);
  }

  getByCode(code: string): Observable<ChannelData> {
    return this.http.get<ChannelData>(`${BASE_URL}getByCode?code=` + code);
  }

  create(channel: ChannelData): Observable<number> {
    return this.http.post<number>(`${BASE_URL}create`, channel);
  }

  update(channel: ChannelData): Observable<number> {
    return this.http.post<number>(`${BASE_URL}update`, channel);
  }
}
