import { Component, OnInit } from '@angular/core';


export class Animal {
  public species : String;
  public name : String;
  public dateOfBirth : Date;

  constructor(species, name, dateOfBirth) {
    this.species = species;
    this.name = name;
    this.dateOfBirth = dateOfBirth;
  }

}
