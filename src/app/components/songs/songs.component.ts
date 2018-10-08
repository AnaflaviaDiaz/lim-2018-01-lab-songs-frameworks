import { Component, OnInit } from '@angular/core';
import { LastFmService } from '../../services/last-fm.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  arrSongs: any[] = [];

  constructor(
    private _lastFmSrv: LastFmService
  ) { }

  ngOnInit() {
  }

  getSongs(artist: string) {
    this._lastFmSrv.getSongs(artist).subscribe((data) => {
      this.arrSongs = data;
    });
  }

  changeCount(like: boolean, pos: string, numberLikes: number) {
    if (like) {
      this.arrSongs[pos].likes = numberLikes + 1;
    } else {
      if (numberLikes !== 0) {
        this.arrSongs[pos].likes = numberLikes - 1;
      }
    }
    this.arrSongs.sort((a, b) =>  a.likes - b.likes).reverse();
  }

}
