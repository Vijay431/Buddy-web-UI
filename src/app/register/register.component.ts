import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //Variables
  phone: string;
  email: string;
  oneTimePassword: string;
  isDetailsValidated: boolean = false;
  isPhoneValidated: boolean = false;
  isEmailValidated: boolean = false;
  OTPFlag: boolean = false;
  isOTPValidated: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  formValidator(){
    let phoneRegex = /^([+]\d{2})?\d{10}$/;
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let OTPRegex = /^([+]\d{2})?\d{6}$/;

    this.isPhoneValidated = phoneRegex.test(this.phone);
    this.isEmailValidated = emailRegex.test(this.email);
    this.isDetailsValidated = this.isPhoneValidated && this.isEmailValidated;
    this.isOTPValidated = OTPRegex.test(this.oneTimePassword);
  }

  sendOTP(){
    this.OTPFlag = true;
  }

  register(){}

  redirectToLogin(){}

}
