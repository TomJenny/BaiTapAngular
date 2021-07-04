import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { BaiTap7Component } from './baitap7.component';

@NgModule({
    declarations: [BaiTap7Component],
    imports: [BrowserModule,FormsModule,NgxPaginationModule],
    exports: [BaiTap7Component],
  
})
export class BaiTap7Module { }
