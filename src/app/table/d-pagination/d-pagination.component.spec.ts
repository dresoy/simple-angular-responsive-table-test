import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DPaginationComponent } from './d-pagination.component';

describe('DPaginationComponent', () => {
  let component: DPaginationComponent;
  let fixture: ComponentFixture<DPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
