import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DTableMobileComponent } from './d-table-mobile.component';

describe('DTableMobileComponent', () => {
  let component: DTableMobileComponent;
  let fixture: ComponentFixture<DTableMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DTableMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DTableMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
