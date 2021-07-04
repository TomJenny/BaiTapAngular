import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BaiTap5Component } from './baitap5.component';


@NgModule({
  declarations: [BaiTap5Component],
  imports: [FormsModule,BrowserModule],
  exports: [BaiTap5Component],

})
export class BaiTap5Module { }
