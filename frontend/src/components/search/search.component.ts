import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app/app.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchString: String = "";
  loading:boolean=false;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
  }

  fetchUserInfo(searchString: String){
    this.loading=true;
    this.appService.fetchUserInfo(searchString);
  }

}
