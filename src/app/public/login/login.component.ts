import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isSignUpMode = false;
  loginForm!: FormGroup;
  submitted!: false;

  @ViewChild('asideSection')
  asideSectionRef!: ElementRef;
  @ViewChild('mainSection')
  mainSectionRef!: ElementRef;

  onSignInClick() {
    this.mainSectionRef.nativeElement.classList.add("slide-right");
    this.asideSectionRef.nativeElement.classList.add("slide-left");
  }
  onSignUpClick() {
    this.mainSectionRef.nativeElement.classList.remove("slide-right");
    this.asideSectionRef.nativeElement.classList.remove("slide-left");
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
}
