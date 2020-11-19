import { Injectable } from '@angular/core';
import {Personne} from '../cv/model/personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheeService {
  personnesEmbauchees: Personne[] = [];
  constructor() { }

  embaucherPersonne(personne: Personne){
    this.personnesEmbauchees.push(personne);
  }
  getList(){
    return this.personnesEmbauchees;
  }

}
