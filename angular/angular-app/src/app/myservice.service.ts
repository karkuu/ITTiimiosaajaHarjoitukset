import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService {
  serviceText = "Initial text. ";
  constructor() { }

  
  randomNumberBetween(num1,num2) {
    let number = Math.floor(Math.random() * num2) + num1;
    return number;
 }
}
