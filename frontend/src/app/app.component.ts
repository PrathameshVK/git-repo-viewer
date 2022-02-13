import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable()
export class AppComponent {
  title = 'frontend';
  constructor(private appService: AppService) { }

  clickBtn(){
    this.appService.sayHi();
  }
}
