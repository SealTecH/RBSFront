export function calculateVector(startPoint: number, targetPoint: number): number {
   if (startPoint < targetPoint) {
      if (startPoint + 6 < targetPoint) {
         return 67.5;
      }

      if (startPoint + 3 > targetPoint) {
         return startPoint + 2 === targetPoint ? 135 : 0;
      }

      if (startPoint + 3 < targetPoint) {
         return startPoint + 5 === targetPoint ? 112.5 : 22.5;
      }

      return 90;
   }

   if (targetPoint < startPoint - 6) {
      return -112.5;
   }

   if (targetPoint > startPoint - 3) {
      return targetPoint + 2 === startPoint ? -45 : 180;
   }

   if (targetPoint < startPoint - 3) {
      return targetPoint + 5 === startPoint ? -22.5 : -112.5;
   }

   return -90;
}
