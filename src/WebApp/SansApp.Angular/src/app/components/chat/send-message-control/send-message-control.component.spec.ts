import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMessageControlComponent } from './send-message-control.component';

describe('SendMessageControlComponent', () => {
  let component: SendMessageControlComponent;
  let fixture: ComponentFixture<SendMessageControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendMessageControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMessageControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
