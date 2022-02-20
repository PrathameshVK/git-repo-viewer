import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable()
export class AppComponent {

  private apiDataSub: Subscription;

  constructor(private appService: AppService, private router: Router) {
    this.apiDataSub=this.appService.getSearchResultListener().subscribe(dataStatus=>{
      if(dataStatus){
        this.router.navigate(['/user',this.appService.userInfo.login]);
      }else{
        this.router.navigate(['/error']);
      }
    })
  }
}
