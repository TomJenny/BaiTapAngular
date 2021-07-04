import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaiTap5Component } from './baitap5/baitap5.component';
import { BaiTap6Component } from './baitap6/baitap6.component';
import { BaiTap7Component } from './baitap7/baitap7.component';

const routes: Routes = [
  { path: 'baitap5', component: BaiTap5Component },
  { path: 'baitap6', component: BaiTap6Component },
  { path: 'baitap7', component: BaiTap7Component },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
