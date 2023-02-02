import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGraphPassDialogComponent } from './edit-graph-pass-dialog.component';

describe('EditGraphPassDialogComponent', () => {
  let component: EditGraphPassDialogComponent;
  let fixture: ComponentFixture<EditGraphPassDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGraphPassDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditGraphPassDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
