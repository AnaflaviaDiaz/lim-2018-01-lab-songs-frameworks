import { Component, OnInit, Input } from '@angular/core';
import { LastFmService } from '../../services/last-fm.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  currentArtist: string;
  arrSongs: any[] = [];

  constructor(
    private _lastFmSrv: LastFmService
  ) { }

  ngOnInit() {
  }

  getSongs(artist: string) {
    this.currentArtist = artist;
    console.log(artist);
    this._lastFmSrv.getSongs(artist).subscribe((data) => {
      this.arrSongs = data;
      console.log(data)
    });
  }

}
