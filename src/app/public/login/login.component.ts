import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isSignUpMode = false;
  signupForm!: FormGroup;
  signinForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

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

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.signinForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]

    })
  }

  onSubmit() {

  }

  inSubmit() {

  }
}
