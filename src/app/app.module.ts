import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArtistComponent } from './components/artist/artist.component';
import { SongsComponent } from './components/songs/songs.component';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    SongsComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
