import {Component, OnInit} from '@angular/core';
import {CharCard} from './interface';
import { getCharacters } from 'rickmortyapi';
import {GenderDictionary} from "../interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  page = 0;
  charList: CharCard[] = [];
  GenderDictionary = GenderDictionary;
  ngOnInit() {
    this.paginate();
  }
  paginate() {
    this.page += 1;
    getCharacters({page: this.page}).then((api) => {
      if (api.data.results) {
        let formattedChL: CharCard[] = api.data.results?.map((char) => {
          return {id: char.id, name: char.name, avatar: char.image, gender: char.gender}
        })
        this.charList.push(...formattedChL);
      }
    })
  }
}
