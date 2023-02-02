import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhoneDashboardComponent } from './phone-dashboard.component';

describe('PhoneRootComponent', () => {
   let component: PhoneDashboardComponent;
   let fixture: ComponentFixture<PhoneDashboardComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [PhoneDashboardComponent]
      })
         .compileComponents();

      fixture = TestBed.createComponent(PhoneDashboardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
