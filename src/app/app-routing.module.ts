import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthorizeGuard } from './authorize.guard';
import { PlayComponent } from './play/play.component';
import { AuthorizeComponent } from './authorize/authorize.component';


const routes: Routes = [
  {
    path: 'authorize', component: AuthorizeComponent
  },
  {
    path: 'play', component: PlayComponent
  },
  {
    path: '**', component: AppComponent, canActivate: [AuthorizeGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
