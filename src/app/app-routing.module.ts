import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { DetailPublicationsComponent } from './components/publications/details-publications/detail-publications/detail-publications.component';

import { RegisterComponent } from './components/auth/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { GuardiaLoginService } from './shared/services/interceptorLogin/guardia-login.service';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [GuardiaLoginService],
  },
  {
    path: 'details-publications',
    component: DetailPublicationsComponent,
  },
  {
    path: 'posts/user',
    component: PerfilComponent,
  },
  { path: 'home', component: LoginComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
