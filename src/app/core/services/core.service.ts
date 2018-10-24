import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor() { }

  getTest(){
    return 'this is from Core';
  }
}