import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { environment } from '../environments/environment';
//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { DetailsPublicationsComponent } from './componentes/details-publications/details-publications.component';
import { LoginComponent } from './componentes/login/login.component';
import { PublicationsComponent } from './componentes/publications/publications.component';
import { UserComponent } from './componentes/user/user.component';
import { GroupComponent } from './componentes/group/group.component';
import { ReactionsComponent } from './componentes/reactions/reactions.component';
import { SearchComponent } from './componentes/search/search.component';
//Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsPublicationsComponent,
    LoginComponent,
    PublicationsComponent,
    UserComponent,
    GroupComponent,
    ReactionsComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule, // imports firebase/firestorage, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
