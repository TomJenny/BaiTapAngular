import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'baitap-angular-app';
  logo: boolean = true;
  ChangeLogo(boolean:boolean) {
    this.logo = boolean;
  }
}
