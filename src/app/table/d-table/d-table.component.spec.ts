import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DTableComponent } from './d-table.component';

describe('DTableComponent', () => {
  let component: DTableComponent;
  let fixture: ComponentFixture<DTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
