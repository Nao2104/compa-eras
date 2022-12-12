import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';
import { AdminComponent } from './routes/admin/admin.component';
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/login/login.component';
import { Page404Component } from './routes/page404/page404.component';
import { StoreComponent } from './routes/store/store.component';
import { SignupComponent } from './routes/signup/signup.component';
import { ShopcartComponent } from './routes/shopcart/shopcart.component';
import { PerfilComponent } from './routes/perfil/perfil.component';
import { NosotrosComponent } from './routes/nosotros/nosotros.component';
import { DetallesProductComponent } from './routes/detalles-product/detalles-product.component';

const routes: Routes = [
  {path:"", pathMatch: "full",redirectTo: "/home" },
  
  {path: "home", component: HomeComponent},
  {path: "store", component: StoreComponent, canActivate:[UserGuard]},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "admin", component: AdminComponent},//, canActivate: [AdminGuard]},
  {path: "shopcart", component: ShopcartComponent},
  {path: "perfil", component: PerfilComponent},
  {path: "nosotros", component: NosotrosComponent},
  {path: "detalles", component: DetallesProductComponent},
  {path:"**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
