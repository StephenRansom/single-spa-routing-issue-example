import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubrouteComponent } from './subroute/subroute.component';
import { AnothersubrouteComponent } from './anothersubroute/anothersubroute.component';

const routes: Routes = [
  {path: 'subroute', component: SubrouteComponent},
  {path: 'anothersubroute', component: AnothersubrouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
