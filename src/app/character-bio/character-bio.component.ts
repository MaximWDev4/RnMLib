import { Component, OnInit} from '@angular/core';
import { GenderDictionary } from "../interface";
import { ICharSpecs } from "./interface";
import { ActivatedRoute } from "@angular/router";
import { getCharacter, } from "rickmortyapi";
import { HttpClient } from "@angular/common/http";
import { first } from "rxjs";


@Component({
  selector: 'app-character-bio',
  templateUrl: './character-bio.component.html',
  styleUrls: ['./character-bio.component.css']
})
export class CharacterBioComponent implements OnInit{
  GenderDictionary = GenderDictionary;
  charId = 0;
  charSpec: ICharSpecs = {
    status: '',
    avatar: '',
    name: '',
    gender: '',
    episodes: [],
  }
  constructor(route: ActivatedRoute, private http: HttpClient) {
    route.paramMap.subscribe((params) => {
      let id = params.get('id')
      if (id) {
        this.charId = +id
      }
    })
  }

  ngOnInit() {
    getCharacter(this.charId).then((char) => {
      this.charSpec = {
        status: char.data.status,
        episodes: this.NamesofEpisodes(char.data.episode),
        gender: char.data.gender,
        name: char.data.name,
        avatar: char.data.image
      }
    })
  }

  NamesofEpisodes(eps: string[]): string[] {
    let namesTmp: string[] = [];
    eps.forEach((ep) => {
      this.http.get(ep).pipe(first()).subscribe((api: any) => namesTmp.push(api.name))
    })
    return namesTmp;
  }
}
