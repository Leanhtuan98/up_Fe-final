import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { BodyComponent } from './page/body/body.component';
import { FooterComponent } from './page/footer/footer.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthInterceptor} from "./auth.interceptor";
import { HeaderComponent } from './admin/header/header.component';

import { DeleteComponent } from './admin/tour/delete/delete.component';
import { EditComponent } from './admin/tour/edit/edit.component';
import { ShowComponent } from './admin/tour/show/show.component';
import {CreateComponent} from "./admin/tour/create/create.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    DeleteComponent,
    EditComponent,
    ShowComponent,
    CreateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
