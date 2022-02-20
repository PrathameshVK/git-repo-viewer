import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app/app.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {PageEvent} from '@angular/material/paginator';

interface Repo{
  name: string,
  description: string,
  topics: string[],
  html_url: string,
  updated_at: Date,
  stargazers_count: number
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})

export class UserDetailsComponent implements OnInit {

  loading: boolean=false;
  userName: string="";

  searchRepoString: string="";
  length: number=10;
  pageSize: number=5;
  pageSizeOptions = [5,25,50,100];
  currentPage: number=1;

  userDetails: any={};
  userRepos : Repo[] = [];

  private reposDataListener: Subscription;

  constructor(private appService: AppService, private route: ActivatedRoute) {
    this.reposDataListener=this.appService.getReposDataListener().subscribe(dataStatus=>{
      if(this.appService.userInfo.reposLength){
        this.length=this.appService.userInfo.reposLength;
      }
      if(this.appService.userRepos){
        this.userRepos=this.appService.userRepos;
      }
    })
  }

  ngOnInit(): void {
    this.loading=true;
    this.userDetails=this.appService.userInfo;
    this.appService.fetchUserRepos(this.pageSize, 1);
    setTimeout(()=>{
      this.loading=false;
    },2000);
  }
  
  onPageChange(pageData: PageEvent){
    this.loading=true;
    console.log(pageData);
    this.currentPage = pageData.pageIndex+1;
    this.pageSize=pageData.pageSize;
    this.appService.fetchUserRepos(this.pageSize, this.currentPage);
    this.loading=false;
  }

}
