import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from 'src/components/user-details/user-details.component';
import { SearchComponent } from 'src/components/search/search.component';
import { ErrorPageComponent } from 'src/components/error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'user/:userName',
    component: UserDetailsComponent
  },
  {
    path: 'error',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UserDetailsComponent, SearchComponent, ErrorPageComponent];