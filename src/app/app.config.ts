// import { ApplicationConfig, importProvidersFrom } from '@angular/core';
// import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';
// import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
// import { getAuth, provideAuth } from '@angular/fire/auth';
// import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
// // import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
// import { getFirestore, provideFirestore } from '@angular/fire/firestore';
// import { getFunctions, provideFunctions } from '@angular/fire/functions';
// import { getPerformance, providePerformance } from '@angular/fire/performance';
// import { getStorage, provideStorage } from '@angular/fire/storage';

// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"iron-swards","appId":"1:123748277051:web:bde1470ff1a7105a99f51e","storageBucket":"iron-swards.appspot.com","locationId":"europe-west3","apiKey":"AIzaSyA4e5o6LrhuwONiaF3Vs2-aH2oeYyGL4vs","authDomain":"iron-swards.firebaseapp.com","messagingSenderId":"123748277051","measurementId":"G-F57CQ372YZ"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideAnalytics(() => getAnalytics())), ScreenTrackingService, UserTrackingService, importProvidersFrom(provideAppCheck(() => {
//   // TODO get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=_
//   // const provider = new ReCaptchaEnterpriseProvider(/* reCAPTCHA Enterprise site key */);
//   // return initializeAppCheck(undefined, { provider, isTokenAutoRefreshEnabled: true });
// })), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideFunctions(() => getFunctions())), importProvidersFrom(providePerformance(() => getPerformance())), importProvidersFrom(provideStorage(() => getStorage()))]
// };
