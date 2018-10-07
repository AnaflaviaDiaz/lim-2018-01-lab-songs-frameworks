import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LastFmService {
  ApiKey = 'd691ab5c6da38d465c768feda73355e7';
  infoArtist: any;
  constructor(
    public _http: HttpClient
  ) { }

  getArtist(artist) {
    return this._http.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=${this.ApiKey}&format=json`)
      .pipe(map((data: any) => {
        return this.infoArtist = {
          image: data.artist.image[2],
          name: data.artist.name
        }
      }));
  }

  getSongs() {

  }

}
