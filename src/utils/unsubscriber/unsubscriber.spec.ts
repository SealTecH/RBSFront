import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Unsubscriber } from './unsubscriber';

describe('Unsubscriber', () => {
   @Component({
      template: ''
   })
   class TestComponent extends Unsubscriber implements OnInit {
      interval$ = interval(100);
      subscription: Subscription;

      ngOnInit(): void {
         this.subscription = this.interval$.subscribe();
         this.subs = this.subscription;
      }
   }

   let component: TestComponent;
   let fixture: ComponentFixture<TestComponent>;

   beforeEach(() => {
      TestBed.configureTestingModule({
         declarations: [TestComponent]
      });

      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   afterEach(() => {
      if (fixture) {
         fixture.destroy();
      }
   });

   it('should unsubscribe from subscriptions added using "subs" setter', fakeAsync(() => {
      expect(component.subscription.closed).toBeFalsy();
      fixture.destroy();
      expect(component.subscription.closed).toBeTruthy();
   }));
});
