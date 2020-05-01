import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAddthisComponent } from './ngx-addthis.component';

describe('NgxAddthisComponent', () => {
  let component: NgxAddthisComponent;
  let fixture: ComponentFixture<NgxAddthisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAddthisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAddthisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
