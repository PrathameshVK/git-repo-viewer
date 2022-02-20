import { Pipe, PipeTransform } from '@angular/core';

interface Repo{
  name: string,
  description: string,
  topics: string[],
  html_url: string,
  updated_at: Date,
  stargazers_count: number
}

@Pipe({
  name: 'searchRepos'
})
export class SearchReposPipe implements PipeTransform {

  transform(value: Repo[], searchString: string) {
    if(value.length===0){
      return value;
    }else{
      searchString=searchString.toLowerCase();
      return value.filter(function(item: Repo){
        if(
            (item.name.toLowerCase().indexOf(searchString)>-1) ||
            (item.description && item.description.toLowerCase().indexOf(searchString)>-1) ||
            (item.topics.includes(searchString)) ||
            (new Date(item.updated_at).toDateString().toLowerCase().indexOf(searchString)>1)
          ){
              return item;
          }else{
              return;
          }
      })
    }
  }

}
