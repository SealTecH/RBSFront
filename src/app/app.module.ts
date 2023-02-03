import { NgModule, isDevMode, Injectable } from '@angular/core';
import {
   BrowserModule, HammerModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG
} from '@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {
   provideAnalytics, getAnalytics, ScreenTrackingService, UserTrackingService
} from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { LayoutModule } from '@angular/cdk/layout';
import * as Hammer from 'hammerjs';
import { environment } from '../environments/environment';
import { ConnectionService } from '../platform';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
   overrides = <any> {
      swipe: { direction: Hammer.DIRECTION_ALL }
   };
}
@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      LayoutModule,
      HammerModule,
      BrowserAnimationsModule,
      HttpClientModule,
      AppRoutingModule,
      MatProgressSpinnerModule,
      ServiceWorkerModule.register('ngsw-worker.js', {
         enabled: !isDevMode(),
         // Register the ServiceWorker as soon as the application is stable
         // or after 30 seconds (whichever comes first).
         registrationStrategy: 'registerWhenStable:30000'
      }),
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideAnalytics(() => getAnalytics()),
      provideAuth(() => getAuth()),
      provideDatabase(() => getDatabase()),
      provideMessaging(() => getMessaging()),
      provideStorage(() => getStorage()),
      provideFirestore(() => getFirestore())
   ],
   providers: [ConnectionService,
      ScreenTrackingService,
      UserTrackingService,
      {
         provide: HAMMER_GESTURE_CONFIG,
         useClass: MyHammerConfig
      }],
   bootstrap: [AppComponent]
})
export class AppModule { }
