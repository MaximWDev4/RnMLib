import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharacterBioComponent} from "./character-bio.component";

const routes: Routes = [
  { path: ':id', component: CharacterBioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterBioRoutingModule { }
