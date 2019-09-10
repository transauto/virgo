import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { NgxGoogleMapModule } from 'ngx-google-map';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    NgxGoogleMapModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
