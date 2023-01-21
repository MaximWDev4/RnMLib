import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterBioComponent } from './character-bio.component';
import {CharacterBioRoutingModule} from "./character-bio.routing-module";
import {MatCardModule} from "@angular/material/card";
import {HttpClient, HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    CharacterBioComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CharacterBioRoutingModule,
    MatCardModule
  ],
  providers: [
    HttpClient
  ]
})
export class CharacterBioModule { }
