import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './component/card/card.component';
import { HomeComponent } from './component/home/home.component';
import { MenubarComponent } from './component/menubar/menubar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material-module';
import { BottommenubarComponent } from './component/bottommenubar/bottommenubar.component';
import { ChartComponent } from './component/chart/chart.component';
import { MusicComponent } from './component/music/music.component';
import { ReelComponent } from './component/reel/reel.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    MenubarComponent,
    BottommenubarComponent,
    ChartComponent,
    MusicComponent,
    ReelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }