import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/login/login.component';
import { SignupComponent } from './routes/signup/signup.component';
import { AdminComponent } from './routes/admin/admin.component';
import { Page404Component } from './routes/page404/page404.component';

import { HttpClientModule } from '@angular/common/http' //-- permite consumir apis con el cliente http de angular
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "./components/footer/footer.component";
import { StoreComponent } from './routes/store/store.component';
//import { ServicesComponent } from './routes/services/services.component';
import { CardComponent } from './components/card/card.component';
import { ShopcartComponent } from './routes/shopcart/shopcart.component';
import { PerfilComponent } from './routes/perfil/perfil.component';
import { NosotrosComponent } from './routes/nosotros/nosotros.component';
import { DetallesProductComponent } from './routes/detalles-product/detalles-product.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    Page404Component,
    SignupComponent,
    StoreComponent,
    //ServicesComponent,
    CardComponent,
    ShopcartComponent,
    PerfilComponent,
    NosotrosComponent,
    DetallesProductComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
