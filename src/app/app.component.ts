import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Buddy-UI';
  email: string;
  cookie1: string;
  cookie2: string;
  date: Date = new Date();

  constructor(private router:Router, private cookies: CookieService){
    // this.redirecting();
  }

  submit(){
    this.email = this.email;
    this.emailexpress();
  }

  emailexpress(){
    let regexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ig;
    if(regexp.test(this.email)){
      if(this.email.includes('wipro.com')){
        //e.g.******@wipro.com
        console.log('User email id is wipro ID');
      }
      else{
        //e.g.******@gmail.com
        console.log('User email id is not a Wipro ID')
      }
    }
    else{
      console.log('validation failed due to invalid email')
    }
  }

  cookieSubmit(){
    this.cookies.set('name1', this.cookie1,this.date.getDate()+1);
    this.cookies.set('name2', this.cookie2);
    let name1 = this.cookies.get('name1'); //read a specific cookie from the cookies array
    console.log(name1);
    let getCookies = this.cookies.getAll(); //read all the cookies
    console.log(getCookies);
  }

  delete(){
    this.cookies.deleteAll(); //delete all the cookies
  }

  // redirecting(){
  //   this.router.navigate(['/register']); //login
  // }
}
