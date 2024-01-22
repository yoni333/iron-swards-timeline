import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularFirestoreModule, USE_EMULATOR as USE_FIRESTORE_EMULATOR, SETTINGS as FIRESTORE_SETTINGS } from '@angular/fire/compat/firestore';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
// import { provideAnalytics, getAnalytics } from '@angular/fire/analytics';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth()),
    // AngularFireAuthModule.initializeApp(environment.firebase),
    // provideAnalytics(()=> getAnalytics()),
   
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      // { path: 'login', component: LoginComponent },
    ])
  ],
  declarations: [
    AppComponent,
   
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
