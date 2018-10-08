import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LastFmService {

  constructor(
    public _http: HttpClient
  ) { }

  getArtist(artist: string) {
    let infoArtist: any;
    return this._http.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=d691ab5c6da38d465c768feda73355e7&format=json`)
      .pipe(map((data: any) => {
        return infoArtist = {
          image: data.artist.image[2],
          name: data.artist.name
        }
      }));
  }

  getSongs(artist: string) {
    let songsArtist: any;
    return this._http.get(`http://ws.audioscrobbler.com/2.0/?method=user.getartisttracks&user=rj&artist=${artist}&api_key=d691ab5c6da38d465c768feda73355e7&format=json`)
      .pipe(map((data: any) => {
        songsArtist = data.artisttracks.track.map((songs) => ({
          name: songs.name,
          id: songs.date.uts,
          likes: 0
        }));
        return songsArtist;
      }));
  }

}
