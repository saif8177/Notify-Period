import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './component/card/card.component';
import { ChartComponent } from './component/chart/chart.component';
import { MusicComponent } from './component/music/music.component';
import { ReelComponent } from './component/reel/reel.component';
import { AdmobBannerComponent } from './component/admob-banner/admob-banner.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SplashComponent } from './component/splash/splash.component';
import { AutoRedirectGuard } from './component/auto-redirect.guard';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'card',component:CardComponent},
  { path: 'chart', component: ChartComponent },
  { path: 'music', component: MusicComponent },
  { path: 'reel', component: ReelComponent },
  { path: 'admob-banner', component: AdmobBannerComponent},
  { path: '', component: SplashComponent, canActivate: [AutoRedirectGuard] },
  { path: 'login', component: LoginComponent,  canActivate: [AutoRedirectGuard], },
  { path: 'signup', component: SignupComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 