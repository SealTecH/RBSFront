import { ChangeDetectorRef, DebugElement, Type } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture } from '@angular/core/testing';

export class TestHelpers {
   static checkTextCellsAreRenderedWithCorrectValues(
      parent: DebugElement,
      targetElements: { [dataTestId: string]: string }
   ): void {
      Object.entries(targetElements).forEach(([attr, cellValue]) => {
         const cell = parent.query(By.css(`[data-test-id="${attr}"]`));

         expect(cell).toBeTruthy(`Element with data-test-id: '${attr}' wasn't found`);
         expect(TestHelpers.getText(cell)).toEqual(cellValue);
      });
   }

   static checkTextCellsContainSomeValue(
      parent: DebugElement,
      targetElements: string[]
   ): void {
      targetElements.forEach((attr: string) => {
         const cell = parent.query(By.css(`[data-test-id="${attr}"]`));

         expect(cell).toBeTruthy(`Element with data-test-id: '${attr}' wasn't found`);
         expect(TestHelpers.getText(cell)).toBeTruthy();
      });
   }

   static checkHeadersAreRenderedWithCorrectValues(
      parent: DebugElement,
      targetElements: { [dataTestId: string]: string }
   ): void {
      Object.entries(targetElements).forEach(([attr, cellValue]) => {
         const cell = parent.query(By.css(`[data-test-id="${attr}"] .header-text-overflow`));

         expect(cell).toBeTruthy(`Element with data-test-id: '${attr}' wasn't found`);
         expect(TestHelpers.getText(cell)).toEqual(cellValue);
      });
   }

   static checkRenderedValues(fixture: ComponentFixture<any>, values: { [recordClass: string]: string }): void {
      Object.entries(values).forEach(([recordClass, recordValue]) => {
         const cell = fixture.debugElement.query(By.css(`[data-test-id="${recordClass}"]`));

         expect(cell).toBeTruthy();
         expect(TestHelpers.getText(cell)).toEqual(recordValue);
      });
   }

   static getTextFromSelector(parent: DebugElement, selector: string): string | null {
      const cell = parent.query(By.css(selector));

      return cell ? TestHelpers.getText(cell) : null;
   }

   static getTextFromDataTestId(parent: DebugElement, dataTestId: string): string | null {
      return TestHelpers.getTextFromSelector(parent, `[data-test-id="${dataTestId}"]`);
   }

   static getText(el: DebugElement): string {
      return el.nativeElement.textContent.trim();
   }

   static fillInputWithValue(fixture: ComponentFixture<any>, inputSelector: string, fillValue: string | number): void {
      const input = fixture.debugElement.query(By.css(inputSelector));

      input.nativeElement.value = fillValue;
      input.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();
   }

   static getElementByDataTestId(fixture: ComponentFixture<any>, id: string): DebugElement {
      return fixture.debugElement.query(By.css(`[data-test-id="${id}"]`));
   }

   static getComponentByDataTestId<Directive>(fixture: ComponentFixture<any>, type: Type<Directive>, id: string): Directive | null {
      const directives = fixture.debugElement.queryAll(By.directive(type));
      const directive = directives.find(item => item.nativeElement.getAttribute('data-test-id') === id);

      return directive?.componentInstance || null;
   }

   static getElementByDirective(fixture: ComponentFixture<any>, directive: any): DebugElement {
      return fixture.debugElement.query(By.directive(directive));
   }

   static getChangeDetectorRef(fixture: ComponentFixture<any>): ChangeDetectorRef {
      return fixture.debugElement.injector.get<ChangeDetectorRef>(ChangeDetectorRef);
   }

   static detectChanges(fixture: ComponentFixture<any>): void {
      TestHelpers.getChangeDetectorRef(fixture).detectChanges();
   }

   static checkRenderedInputValues(fixture: ComponentFixture<any>, values: { [recordClass: string]: string }): void {
      Object.entries(values).forEach(([recordClass, recordValue]) => {
         const cell = fixture.debugElement.query(By.css(`[data-test-id="${recordClass}"]`));

         expect(cell).toBeTruthy();
         expect(cell.properties.value).toEqual(recordValue);
      });
   }

   static getElementByDataTestIdAndSelector(fixture: ComponentFixture<any>, id: string, selector: string): DebugElement[] {
      return fixture.debugElement.queryAll(By.css(`[data-test-id="${id}"] ${selector}`));
   }

   // forcing ChangeDetection on components with OnPush ChangeDetection strategy
   // https://github.com/angular/angular/issues/12313#issuecomment-528536934
   static async runOnPushChangeDetection<T>(cf: ComponentFixture<T>): Promise<void> {
      const cd = cf.debugElement.injector.get<ChangeDetectorRef>(
         // tslint:disable-next-line:no-any
         ChangeDetectorRef as any
      );

      cd.detectChanges();
      await cf.whenStable();
   }
}
