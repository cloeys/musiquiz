import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthorizeGuard } from './authorize.guard';
import { PlayComponent } from './play/play.component';
import { AuthorizeComponent } from './authorize/authorize.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'authorize', component: AuthorizeComponent
  },
  {
    path: 'play', component: PlayComponent, canActivate: [AuthorizeGuard]
  },
  {
    path: '**', component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
