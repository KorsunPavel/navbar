import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { UsersComponent }   from '../users/users.component';
import { HomeComponent }     from '../home/home.component';
import { PageNotFoundComponent } from '../not-found/not-found.component';

const appRoutes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'home',        component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}