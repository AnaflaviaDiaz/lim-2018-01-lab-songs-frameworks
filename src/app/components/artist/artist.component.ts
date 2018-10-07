import { LastFmService } from './../../services/last-fm.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  nameArtist: string;
  imageArtist: any;
  arrArtist = ['bruno+mars', 'Beyonce', 'Shakira', 'Belinda', 'michael+jackson'];
  currentNameArtist = this.arrArtist[0];
  constructor(
    private _lastFmSrv: LastFmService
  ) { }

  ngOnInit() {
    this.getArtist(this.currentNameArtist);
  }

  getArtist(artist) {
    this._lastFmSrv.getArtist(artist).subscribe((data) => {
      this.imageArtist = data.image['#text'];
      this.nameArtist = data.name;
    });
  }

  changeRightArtist(currentA) {
    let pos = this.arrArtist.indexOf(currentA);
    if (pos === 4) this.currentNameArtist = this.arrArtist[0];
    else this.currentNameArtist = this.arrArtist[pos + 1];
    this.getArtist(this.currentNameArtist);
  }

  changeLeftArtist(currentA) {
    let pos = this.arrArtist.indexOf(currentA);
    if (pos === 0) this.currentNameArtist = this.arrArtist[4];
    else this.currentNameArtist = this.arrArtist[pos - 1];
    this.getArtist(this.currentNameArtist);
  }

}
