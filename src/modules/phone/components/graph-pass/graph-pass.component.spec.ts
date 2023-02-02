import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphPassComponent } from './graph-pass.component';

describe('GraphPassComponent', () => {
  let component: GraphPassComponent;
  let fixture: ComponentFixture<GraphPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphPassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
