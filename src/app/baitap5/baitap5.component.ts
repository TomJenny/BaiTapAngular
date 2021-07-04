import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'baitap5-app',
    template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark container">
    <a class="navbar-brand" href="#">BÀI TẬP SỐ 5</a>
    <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation"></button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
            <button class="btn btn-success mr-5" routerLink="/baitap5" routerLinkActive="active" data-toggle="modal" data-target="#modelId" *ngIf="(userName !== 'cybersoft' || password !== 'cybersoft');else userLogin ">Login</button>
            </li>
        </ul>

       
        <ng-template #userLogin>
           <span class="text-white"> Xin Chào {{userName}}</span>
        </ng-template>
    </div>
</nav>
        <!-- Modal -->
        <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">BÀI TẬP 5 - ANGULAR</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                    <div class="modal-body">
                        <form id="form1">
                       <div class="form-group">
                         <label for="userName">UserName</label>
                         <input type="text" class="form-control"placeholder="UserName" [(ngModel)]="userName" name="userName" >
                       </div>
                       <div class="form-group">
                         <label for="userName">Password</label>
                         <input type="text" class="form-control"  placeholder="UserName" [(ngModel)]="password" name="password">
                       </div>
                       </form>
                    </div>
                    <div class="modal-footer">
                    <button type="reset" class="btn btn-danger" data-dismiss="modal" (click)="validate()">login</button>
                    <button type="reset" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    `
})

export class BaiTap5Component implements OnInit {

     userName: string = '';
     password: string = '';

    validate() {
        if (this.userName === 'cybersoft' && this.password === 'cybersoft') {
            localStorage.setItem('UserLogin', JSON.stringify({ userName: this.userName, password: this.password }))
        } else {
            alert('Nhập sai mật khẩu hoặc tên đăng nhập. Xin vui lòng nhập lại xin cám ơn !!!')
        }
    }
    constructor() { }

    ngOnInit() { }
}