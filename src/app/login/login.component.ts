import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Variables
  phone: string;
  oneTimePassword: string;
  isPhoneValidated: boolean = false;
  isPhoneValidationValid: boolean = false;
  isOTPValidated: boolean = false;
  isOTPValidationValid: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {}

  //Custom Functions
  formValidator(){
    let phoneRegex = /^([+]\d{2})?\d{10}$/;
    let OTPRegex = /^([+]\d{2})?\d{6}$/;

    this.isPhoneValidationValid = phoneRegex.test(this.phone);
    this.isOTPValidationValid = OTPRegex.test(this.oneTimePassword);
  }

  sendOTP(){
    this.isPhoneValidated = true;
    this.isOTPValidated = true;
  }

  login(){
    this.router.navigate(['/home']);
  }

  register(){
    this.router.navigate(['/register']);
  }

}
