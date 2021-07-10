import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BaiTap5Component } from './baitap5/baitap5.component';
import { BaiTap6Component } from './baitap6/baitap6.component';
import { BaiTap7Component } from './baitap7/baitap7.component';
import { BaiTap8Module } from './baitap8/baitap8.module';

const routes: Routes = [
  { path: 'baitap5', component: BaiTap5Component },
  { path: 'baitap6', component: BaiTap6Component },
  { path: 'baitap7', component: BaiTap7Component },
  {path: 'baitap8', loadChildren:() => BaiTap8Module}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
