import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'app-chair',
    template: `
        <button class="btn btn-secondary mr-2" [ngClass]="{'btn-success':itemChair.TrangThai}" (click)="BookChair(itemChair.SoGhe)">{{itemChair.SoGhe}}</button>
        <ng-container *ngIf="(i+1) % 4 === 0">
            <br/>
        </ng-container>
    `,
    styles: [`
      button {
          width: 40px;
          height: 40px;
          margin: 5px;
          text-align: center !important;
      }
        `]
})

export class ChairComponent implements OnInit {
    @Input() itemChair: any = {};

    @Input() i: any;

    @Output() eventBookChair = new EventEmitter();
  
  

    BookChair(SoGhe:number) {
        
        this.eventBookChair.emit(SoGhe);
    }
    constructor() { }

    
    ngOnInit() { }
}

