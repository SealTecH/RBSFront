import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairHistoryDialogComponent } from './repair-history-dialog.component';

describe('RepairHistoryDialogComponent', () => {
  let component: RepairHistoryDialogComponent;
  let fixture: ComponentFixture<RepairHistoryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairHistoryDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairHistoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
