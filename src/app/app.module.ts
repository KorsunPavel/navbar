import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TopBarComponent  } from './top-bar/top-bar.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    UsersComponent,
    PageNotFoundComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
