import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    PublicComponent,
    ContactComponent,
    ServiceComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    PublicRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class PublicModule { }
