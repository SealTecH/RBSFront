import { NgModule, Injectable } from '@angular/core';
import {
   BrowserModule, HammerModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG
} from '@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import * as Hammer from 'hammerjs';
import { Firestore } from '@firebase/firestore';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FirebaseService } from '../platform/services/firebase/firebase.service';
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
      MatSidenavModule,
      MatButtonModule,
      MatIconModule,
      MatListModule
      // ServiceWorkerModule.register('ngsw-worker.js', {
      //    enabled: !isDevMode(),
      //    // Register the ServiceWorker as soon as the application is stable
      //    // or after 30 seconds (whichever comes first).
      //    registrationStrategy: 'registerWhenStable:30000'
      // }),
   ],
   providers: [
      {
         provide: HAMMER_GESTURE_CONFIG,
         useClass: MyHammerConfig
      },
      {
         provide: Firestore,
         useClass: FirebaseService
      }
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }
