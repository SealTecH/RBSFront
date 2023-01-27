import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectActionDialogComponent } from './select-action-dialog.component';

describe('SelectActionDialogComponent', () => {
  let component: SelectActionDialogComponent;
  let fixture: ComponentFixture<SelectActionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SelectActionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectActionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
