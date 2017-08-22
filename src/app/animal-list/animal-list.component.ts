import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal/animal';
import { Sector } from '../sector/sector';


@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})

export class AnimalListComponent {
  private animals : any[];
  private sectors : Sector[];

  private animal: Animal = new Animal('','','', null);

  constructor() {
    this.sectors = [
      new Sector('East','100.000'),
      new Sector('NorthEast','150.000'),
      new Sector('South','130.500'),
    ];
    this.animals = [
      new Animal('Elephant','Nelly','05.09.1999', this.sectors[2]),
      new Animal('Elephant','Wally','01.03.1989', this.sectors[2]),
      new Animal('Penguin','Pingu','08.03.2006', this.sectors[1]),
      new Animal('Panda','Polly','08.03.2006', this.sectors[0] ),
      new Animal('Panda','Blush','' , this.sectors[0]),
      new Animal('Zebra','Ziggy','22.04.2000', this.sectors[2]),
      new Animal('Bear','Smokey','16.10.2010' , this.sectors[2]),
      new Animal('Monkey','Molly','14.11.2002' , this.sectors[0]),
      new Animal('Monkey','Bush','' , this.sectors[0])
    ];


  }

  remove(animal){
    const index = this.animals.indexOf(animal);
    this.animals.splice(index, 1);
  }

  add(){
    this.animals.push(this.animal);
    this.animal = new Animal('','','', null);
  }

  moveToTop(animal){
    const index = this.animals.indexOf(animal);
    this.animals.splice(index, 1);
    this.animals.splice(0,0,animal);
  }

}
