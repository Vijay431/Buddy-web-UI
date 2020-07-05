import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Buddy-UI';
  constructor(private router:Router){
    this.redirecting();
  }

  redirecting(){
    this.router.navigate(['/register']); //login
  }
}
