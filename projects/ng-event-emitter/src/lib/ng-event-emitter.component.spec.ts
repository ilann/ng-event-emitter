import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgEventEmitterComponent } from './ng-event-emitter.component';

describe('NgEventEmitterComponent', () => {
  let component: NgEventEmitterComponent;
  let fixture: ComponentFixture<NgEventEmitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgEventEmitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgEventEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
