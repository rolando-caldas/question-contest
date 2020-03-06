import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContestsComponent} from "./contests/contests.component";
import {CreateComponent} from "./create/create.component";
import {PlayComponent} from "./play/play.component";


const routes: Routes = [
  {path: '', component: ContestsComponent},
  {path: 'new', component: CreateComponent},
  {path: 'play/:id', component: PlayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
