import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnothersubrouteComponent } from './anothersubroute.component';

describe('AnothersubrouteComponent', () => {
  let component: AnothersubrouteComponent;
  let fixture: ComponentFixture<AnothersubrouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnothersubrouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnothersubrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
