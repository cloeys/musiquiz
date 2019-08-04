import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Track } from '../models/track.model';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private apiUrl = 'http://localhost:64838/api/v1';
  isAuthorized: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient
  ) { }

  getPlaylist(genre: string): Observable<Track[]> {
      return this.http.get<Track[]>(`${this.apiUrl}/start/${genre}`);
  }
}
