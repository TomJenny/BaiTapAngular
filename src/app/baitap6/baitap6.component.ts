import { Component, OnInit } from '@angular/core';
import { SanPham } from '../_core/modules/SanPham';

@Component({
    selector: 'bai-tap-6',
    template: `
    <div class="container border p-0">
        <h4 class="bg-dark text-white p-2">Quản Lý Danh Mục Sản Phẩm</h4>
        <form class="px-4">
            <div class='form-group'>
                <label for="">Mã SP</label>
                <input type="text" class="form-control"  placeholder="Mã Sản phẩm"  #maSP />
            </div>
            <div class='form-group'>
                <label for="">Tên SP</label>
                <input type="text" class="form-control"  placeholder="Tên Sản Phẩm" #tenSP />
            </div>
            <div class='form-group'>
                <label for="">Giá</label>
                <input type="text" class="form-control"  placeholder="Giá" #gia />
            </div>
            <div class='form-group'>
                <button type="button" class="btn btn-success" (click)="ThemSanPham(maSP.value,tenSP.value,gia.value)">Thêm Sản Phẩm</button>
            </div>
        </form>
    </div>
    <div class="container p-0 mt-3">
    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">STT</th>
      <th scope="col">Mã SP</th>
      <th scope="col">Tên SP</th>
      <th scope="col">Giá</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let sp of sanPham; let stt= index">
      <th scope="row">{{stt +1}}</th>
      <td>{{sp.maSP}}</td>
      <td>{{sp.tenSP}}</td>
      <td>{{sp.gia}}</td>
    </tr>
  </tbody>
</table>
    </div>
        `
})

export class BaiTap6Component implements OnInit {

     sanPham: SanPham[] = [{  maSP: 'DT', tenSP: 'Iphone', gia: 20000 }]
    
    ThemSanPham(maSP:string,tenSP:string,gia:string) {
        this.sanPham.push({  maSP: maSP, tenSP: tenSP, gia: Number(gia) })
    }

    constructor() { }

    ngOnInit() { }
}