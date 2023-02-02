import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { calculateVector } from './graph-pass.utils';

@Component({
   selector: 'graph-pass',
   templateUrl: './graph-pass.component.html',
   styleUrls: ['./graph-pass.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphPassComponent {
   readonly passButtons = [...Array(10).keys()].slice(1);
   @Input()
      graphPass: number[] = [];

   graphPassAdd(dot: number): void {
      this.graphPass.push(dot);
   }

   graphPassReset(): void {
      this.graphPass = [];
   }

   onPassProceed(): void {
      // this.state$.next(ProcessState.Final);
   }

   calculateArrows(): { vector: number, index: number, marginTop: number, marginRight: number}[] {
      const res = this.graphPass.map((startPoint, index) => {
         if (index === this.graphPass.length - 1) {
            return null;
         }

         const targetPoint = this.graphPass[index + 1];

         return {
            vector: calculateVector(startPoint, targetPoint),
            index: startPoint,
            marginTop: startPoint % 3 === 1 ? 4 : startPoint % 3,
            // eslint-disable-next-line no-nested-ternary
            marginRight: startPoint > 6 ? 4 : (startPoint > 3 ? 2 : 0)
         };
      }).slice(0, -1) as { vector: number, index: number, marginTop: number, marginRight: number}[];

      console.log(res);

      return res;
   }
}
