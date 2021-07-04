import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaiTap5Module } from './baitap5/baitap5.module';
import { BaiTap6Module } from './baitap6/baitap6.module';
import { BaiTap7Module } from './baitap7/baitap7.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaiTap5Module,
    BaiTap6Module,
    BaiTap7Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
