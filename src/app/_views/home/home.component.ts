import {Component, OnInit} from '@angular/core';
import {CharCard, Dictionary} from './interface';
import { getCharacters } from 'rickmortyapi'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  GenderDictionary: Dictionary<String> = {
    'Female': 'assets/female.svg',
    'Male': 'assets/male.svg',
    'Genderless': 'assets/agender.svg',
    'unknown': 'assets/unknown-gender.svg'
  }
  page = 0;
  charList: CharCard[] = [];
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
