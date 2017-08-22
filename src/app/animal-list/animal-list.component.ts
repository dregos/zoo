import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal/animal';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})

export class AnimalListComponent {
  private animals : any[];

  constructor() {
    
    this.animals = [
      new Animal('Elephant','Nelly','05.09.1999' ),
      new Animal('Elephant','Wally','01.03.1989' ),
      new Animal('Penguin','Pingu','08.03.2006' ),
      new Animal('Panda','Polly','08.03.2006' ),
      new Animal('Panda','Blush','' ),
      new Animal('Zebra','Ziggy','22.04.2000' ),
      new Animal('Bear','Smokey','16.10.2010' ),
      new Animal('Monkey','Molly','14.11.2002' ),
      new Animal('Monkey','Bush','' ),
      new Animal('Bear','Smokey','16.10.2010' )
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
