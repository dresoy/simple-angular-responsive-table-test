import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DTableDesktopComponent } from './d-table-desktop.component';

describe('DTableDesktopComponent', () => {
  let component: DTableDesktopComponent;
  let fixture: ComponentFixture<DTableDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DTableDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DTableDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
