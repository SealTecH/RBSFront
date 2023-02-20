import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class ResolutionService {
   readonly pcMode$ = this.breakpointObserver.observe(['(min-width: 600px)']).pipe(
      map(state => state.matches)
   );

   constructor(private breakpointObserver: BreakpointObserver) {

   }
}
