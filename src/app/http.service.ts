import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  ability:string;

  constructor(private _http: HttpClient) { 
    this.getPokemon(1);
   }

  getPokemon(id:number, ability ?: string) {
    if (ability){
      let pokemon = this._http.get(ability);
      pokemon.subscribe(data => {
        console.log(data);
      })
    }
    else {
      const string = "https://pokeapi.co/api/v2/pokemon/"+id+"/"
      console.log(string);
      let pokemon = this._http.get(string);
      pokemon.subscribe(data => {
      console.log(data);
      this.ability = data['abilities'][0]['ability']['url'];
      this.getPokemon(0,this.ability);
    });
    } 
  }
}
