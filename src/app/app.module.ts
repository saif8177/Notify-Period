import { NgModule, APP_INITIALIZER  } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { AdmobBannerComponent } from './component/admob-banner/admob-banner.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { SplashComponent } from './component/splash/splash.component';
import { AutoRedirectGuard } from './component/auto-redirect.guard';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    MenubarComponent,
    BottommenubarComponent,
    ChartComponent,
    MusicComponent,
    ReelComponent,
    AdmobBannerComponent,
    LoginComponent,
    SignupComponent,
    SplashComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    AutoRedirectGuard,
    provideClientHydration(),
    provideAnimationsAsync(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function initializeApp() {
  return () =>
    new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 9000);
    });
}
