import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BulmaComponent } from './components/bulma/bulma.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bulma', component: BulmaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
