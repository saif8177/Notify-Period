import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './component/card/card.component';
import { ChartComponent } from './component/chart/chart.component';
import { MusicComponent } from './component/music/music.component';
import { ReelComponent } from './component/reel/reel.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'card',component:CardComponent},
  { path: 'chart', component: ChartComponent },
  { path: 'music', component: MusicComponent },
  { path: 'reel', component: ReelComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 