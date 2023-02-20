import {
   Component, ChangeDetectionStrategy, OnDestroy, ViewChild
} from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';
import { environment } from '../environments/environment';
import { ResolutionService } from '../platform/services/resolution/resolution.service';
import { AuthService } from '../platform/services/auth/auth.service';
import { PlatformPages } from '../platform';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnDestroy {
   readonly module = environment.module;
   readonly pcMode$ = this.resolutionService.pcMode$;
   readonly loading$ = new BehaviorSubject<boolean>(false);

   @ViewChild('drawer')
      drawer: MatDrawer;

   constructor(private resolutionService: ResolutionService, private auth: AuthService, private router: Router) {
   }

   ngOnDestroy(): void {

   }

   logout(): void {
      this.auth.signOut().pipe(take(1)).subscribe(() => {
         this.drawer.close();
         this.router.navigate([PlatformPages.Login]);
      });
   }
}
