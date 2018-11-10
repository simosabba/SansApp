import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleCommunicationComponent } from './people-communication.component';

describe('PeopleCommunicationComponent', () => {
  let component: PeopleCommunicationComponent;
  let fixture: ComponentFixture<PeopleCommunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleCommunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
