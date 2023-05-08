import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isSignUpMode = false;
  loginForm!: FormGroup;
  submitted!: false;

  @ViewChild('asideSection')
  asideSectionRef!: ElementRef;
  @ViewChild('mainSection')
  mainSectionRef!: ElementRef;



  constructor(private fb1: FormBuilder) {

  }

  onSignInClick() {
    this.mainSectionRef.nativeElement.classList.add("slide-right");
    this.asideSectionRef.nativeElement.classList.add("slide-left");
  }

  onSignUpClick() {
    this.mainSectionRef.nativeElement.classList.remove("slide-right");
    this.asideSectionRef.nativeElement.classList.remove("slide-left");
  }

  ngOnInit(): void {
    this.loginForm = this.fb1.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

}
