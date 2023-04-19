import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    PublicComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
