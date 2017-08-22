import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})

export class AnimalListComponent {
  private animals : any[];

  constructor() {
    //vrstu, ime i datum rođenja
    this.animals = [
      {
        species: 'Elephant',
        name: 'Nelly',
        birthDate: '05.09.1999'
      },
      {
        species: 'Elephant',
        name: 'Wally',
        birthDate: '01.03.1989'
      },
      {
        species: 'Panda',
        name: 'Polly',
        birthDate: '08.03.2006'
      },
      {
        species: 'Zebra',
        name: 'Ziggy',
        birthDate: '22.04.2000'
      }
    ]
  }

  remove(animal){
    const index = this.animals.indexOf(animal);
    this.animals.splice(index, 1);
  }

  add(animal){
    this.animals.push(animal);
  }

}
