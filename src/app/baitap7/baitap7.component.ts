import { Component, OnInit } from '@angular/core';
import { SanPham2 } from '../_core/modules/SanPham';

@Component({
    selector: 'baitap7-app',
    template: `
       <div class="container border p-0">
        <h4 class="bg-dark text-white p-2">Quản Lý Danh Mục Sản Phẩm</h4>
        <form class="px-4">
            <div class="row">
            <div class='form-group col-3'>
                <label for="">Mã SP</label>
                <input type="text" class="form-control"  placeholder="Mã Sản phẩm"  #MaSP />
            </div>
            <div class='form-group col-3'>
                <label for="">Tên SP</label>
                <input type="text" class="form-control"  placeholder="Tên Sản Phẩm" #TenSP />
            </div>
            <div class='form-group col-3'>
                <label for="">Giá</label>
                <input type="text" class="form-control"  placeholder="Giá" #Gia />
            </div>
            <div class='form-group col-3 d-flex justify-content-center align-items-center'>
                <button type="button" class="btn btn-success " (click)="ThemSanPham2(MaSP.value,TenSP.value,Gia.value)">Thêm Sản Phẩm</button>
            </div>
            </div>
        </form>
    </div>
    <div class="container p-0 mt-3">
    <h4 class="bg-dark text-white p-2">Danh Mục Sản Phẩm</h4>
    <table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">Mã SP</th>
      <th scope="col">Tên SP</th>
      <th scope="col">Giá</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let SP of sanPham2 | paginate: { itemsPerPage: 10, currentPage: p }">
      <th scope="row">{{SP.MaSP}}</th>
      <td>{{SP.TenSP}}</td>
      <td>{{SP.Gia}}</td>
    </tr>
  </tbody>
</table>
<pagination-controls (pageChange)="p = $event"></pagination-controls>
    </div>
    `
})

export class BaiTap7Component implements OnInit {
    p: number = 1;
    sanPham2: SanPham2[] = [
    {MaSP: 1, TenSP: "Sony XZ", Gia: 1000 },
    {MaSP:2,TenSP:"Sony XZ2",Gia:1000},
    {MaSP:3,TenSP:"HTC U Ultra",Gia:1000},
    {MaSP:4,TenSP:"HTC U12 Plus",Gia:1000},
    {MaSP:5,TenSP:"Iphone XS MAX",Gia:1000},
    {MaSP:6,TenSP:"Iphone XR",Gia:1000},
    {MaSP:7,TenSP:"Xiaomi Mi Note 3",Gia:9900},
    {MaSP:8,TenSP:"Xiaomi Mi 8",Gia:1000},
    {MaSP:9,TenSP:"Galaxy Note 9",Gia:1000},
    {MaSP:10,TenSP:"Galaxy S9 Plus",Gia:1000},
    {MaSP:11,TenSP:"Nokia X9",Gia:1000},]
    
    ThemSanPham2(MaSP:string,TenSP:string,Gia:string) {
        this.sanPham2.push({  MaSP: Number(MaSP), TenSP: TenSP, Gia: Number(Gia) })
    }

    constructor() { }

    ngOnInit() { }
}