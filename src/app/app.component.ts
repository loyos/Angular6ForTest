import { Component } from '@angular/core';
import { CoreService } from './core/services/core.service';
import { AuthService } from './auth/shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myAuthApp';
  b;

  constructor( private coreService: CoreService, private authService: AuthService ){

  }

  ngOnInit() {
    this.b = this.coreService.getTest();
    // this.b = this.authService.getTest();
  }

}
