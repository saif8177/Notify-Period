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

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    MenubarComponent,
    BottommenubarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [
    pr