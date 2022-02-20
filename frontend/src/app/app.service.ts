import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  userInfo: any;
  userRepos: any;

  private searchResultListener = new Subject<boolean>();
  private repoDataListener = new Subject<boolean>();

  getSearchResultListener() {
    return this.searchResultListener.asObservable();
  }

  getReposDataListener(){
    return this.repoDataListener.asObservable();
  }

  constructor(private http: HttpClient) { }

  fetchUserInfo(searchString: String){
      this.http.get<any>(`http://localhost:3000/api/search?user=${searchString}`).subscribe({
        next: data => {
          this.userInfo = data.data;
          this.searchResultListener.next(true);
        },
        error: error => {
          this.searchResultListener.next(false);
        }
      });
  }

  fetchUserRepos(pageSize: number, currentPage: number){
    const startIndex=(currentPage - 1)*pageSize;
    const endIndex=currentPage*pageSize;
      this.http.get<any>(`http://localhost:3000/api/search/repos?pageSize=${pageSize}&currentPage=${currentPage}`).subscribe({
        next: data=>{
          this.userRepos=data.data;
          this.repoDataListener.next(true);
        },
        error: error => {
          this.userRepos=[];
          this.repoDataListener.next(false);
        }
      })
  }
}