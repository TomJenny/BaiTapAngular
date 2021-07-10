import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ChairComponent } from './Chair/Chair.component';
import { ListChairComponent } from './ListChair/ListChair.component';


const BaiTap8Routes : Routes = [
    {path:'',component:ListChairComponent}
]

@NgModule({
    imports: [CommonModule, RouterModule.forChild(BaiTap8Routes)],
    exports: [],
    declarations: [ChairComponent,ListChairComponent],
  
})
export class BaiTap8Module { }
