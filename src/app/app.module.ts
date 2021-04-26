import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Services
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from '../environments/environment';
//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { UserComponent } from './components/user/user.component';
import { GroupComponent } from './components/group/group.component';
import { SearchComponent } from './components/search/search.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { PublicationsComponent } from './components/publications/publication/publications.component';
import { ReactionsComponent } from './components/publications/reactions/reactions.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DetailPublicationsComponent } from './components/publications/details-publications/detail-publications/detail-publications.component';
import { CreatePublicationsComponent } from './components/publications/create-publications/create-publications.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { InterceptorService } from './shared/services/interceptorLogin/interceptor.service';
import { GuardiaLoginService } from './shared/services/interceptorLogin/guardia-login.service';
import { CreateGroupComponent } from './components/group/createGroup/createGroup.component';
//Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
//Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';;
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    GroupComponent,
    SearchComponent,
    RegisterComponent,
    PublicationsComponent,
    ReactionsComponent,
    NavBarComponent,
    DetailPublicationsComponent,
    CreatePublicationsComponent,
    PerfilComponent,
    CreateGroupComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule, // imports firebase/firestorage, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [GuardiaLoginService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent], entryComponents: [LoginComponent]
})
export class AppModule { }
