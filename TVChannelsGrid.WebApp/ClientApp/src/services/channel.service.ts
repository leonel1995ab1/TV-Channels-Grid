import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private http: HttpClient) { }

  getChannels(): Observable<any> {
    return this.http.get('api/channel/getChannels');
  }

  getChannelById(id: number): Observable<any> {
    return this.http.get('api/channel/getChannelById?id=' + id);
  }
}
