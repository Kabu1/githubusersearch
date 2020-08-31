import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UpperCasePipe } from './upper-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavbarComponent,
    UserInfoComponent,
    RepositoriesComponent,
    UpperCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
