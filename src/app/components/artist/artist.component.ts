import { LastFmService } from './../../services/last-fm.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  @Output() valueChange = new EventEmitter();
  nameArtist: string;
  imageArtist: any;
  arrArtist = ['calvin+harris', 'bruno+mars', 'drake', 'eminem', 'michael+jackson'];
  currentNameArtist = this.arrArtist[0];

  constructor(
    private _lastFmSrv: LastFmService
  ) { }

  ngOnInit() {
    this.valueChange.emit(this.currentNameArtist);
    this.getArtist(this.currentNameArtist);
  }

  getArtist(artist: string) {
    this._lastFmSrv.getArtist(artist).subscribe((data) => {
      this.imageArtist = data.image['#text'];
      this.nameArtist = data.name;
    });
  }

  getsongs(artist: string) {
    this._lastFmSrv.getSongs(artist).subscribe((data) => console.log(data));
  }

  changeArtist(currentA: string, position: string) {
    const pos = this.arrArtist.indexOf(currentA);
    if (position === 'left') {
      if (pos === 0) this.currentNameArtist = this.arrArtist[4];
      else this.currentNameArtist = this.arrArtist[pos - 1];
    } else {
      if (pos === 4) this.currentNameArtist = this.arrArtist[0];
      else this.currentNameArtist = this.arrArtist[pos + 1];
    }
    this.valueChange.emit(this.currentNameArtist);
    this.getArtist(this.currentNameArtist);
  }

}
