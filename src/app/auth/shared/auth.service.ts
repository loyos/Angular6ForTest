import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getTest(){
    return 'this is from Auth Service';
  }
}
