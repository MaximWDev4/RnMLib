import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterBioComponent } from './character-bio.component';
import {CharacterBioRoutingModule} from "./character-bio.routing-module";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    CharacterBioComponent
  ],
  imports: [
    CommonModule,
    CharacterBioRoutingModule,
    MatCardModule
  ]
})
export class CharacterBioModule { }
