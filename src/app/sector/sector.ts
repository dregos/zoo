import { Component, OnInit } from '@angular/core';


export class Sector {
  public name : string;
  public surface : number;

  constructor(name, surface) {
    this.name = name;
    this.surface = surface;
  }

}
