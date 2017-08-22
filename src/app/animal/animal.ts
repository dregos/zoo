import { Component, OnInit } from '@angular/core';
import { Sector } from '../sector/sector';

export class Animal {
  public species : String;
  public name : String;
  public dateOfBirth : Date;
  private sector : Sector;

  constructor(species, name, dateOfBirth, sector:Sector) {
    this.species = species;
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.sector = sector;
  }

}
