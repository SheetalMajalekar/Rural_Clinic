import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isSignUpMode = false;

  @ViewChild('signInBtn')
  signInBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('signUpBtn')
  signUpBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('container')
  container!: ElementRef<HTMLElement>;

  switchToSignUp() {
    this.isSignUpMode = true;
    this.container.nativeElement.classList.add('sign-up-mode');
  }

  switchToSignIn() {
    this.isSignUpMode = false;
    this.container.nativeElement.classList.remove('sign-up-mode');
  }
  
  constructor() {

  }

  ngOnInit(): void{

    // this.signUpButton = document.getElementById('sign-up-btn') as HTMLButtonElement;
    // this.signInButton = document.getElementById('sign-in-btn') as HTMLButtonElement;
    // this.container = document.querySelector('.container') as HTMLElement;

    // this.signUpButton.addEventListener('click', () => {
      // this.container.classList.add('sign-up-mode');
    // });

    // this.signInButton.addEventListener('click', () => {
      // this.container.classList.remove('sign-up-mode');
    // });

  }
}
