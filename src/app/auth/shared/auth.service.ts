import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';

(window as any).global = window;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'C00FInCmdC8hxJJkvNpMTNssTGfhG3EJ',
    domain: 'loyos.eu.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid'
  });


  constructor() { }

  getTest(){
    return 'this is from Auth Service';
  }

  public login(): void {
    this.auth0.authorize();
  }
}
