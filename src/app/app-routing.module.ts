import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeRootingModule} from "./_views/home/home.rooting-module";

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./_views/home/home.rooting-module').then(m => m.HomeRootingModule),
  },
  {
    path: 'character',
    loadChildren: () => import('./_views/character-bio/character-bio.routing-module').then(m => m.CharacterBioRoutingModule),
  },
  {
    path: '*',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
