import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../shared/auth.service';
import { AuthService } from '@app/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  a: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.a = this.authService.getTest();
  }

  login(){
    this.authService.login();
  }

}
