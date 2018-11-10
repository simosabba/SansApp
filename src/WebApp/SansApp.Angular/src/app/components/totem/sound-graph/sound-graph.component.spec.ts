import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundGraphComponent } from './sound-graph.component';

describe('SoundGraphComponent', () => {
  let component: SoundGraphComponent;
  let fixture: ComponentFixture<SoundGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
