import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoiseControlComponent } from './noise-control.component';

describe('NoiseControlComponent', () => {
  let component: NoiseControlComponent;
  let fixture: ComponentFixture<NoiseControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoiseControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoiseControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
