import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {HomeRootingModule} from "./home.rooting-module";
import {MatCardModule} from "@angular/material/card";
import {InfiniteScrollModule} from "ngx-infinite-scroll";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRootingModule,
    MatCardModule,
    InfiniteScrollModule
  ]
})
export class HomeModule { }
