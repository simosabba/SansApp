import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgPreloadComponent } from './img-preload.component';

describe('ImgPreloadComponent', () => {
  let component: ImgPreloadComponent;
  let fixture: ComponentFixture<ImgPreloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgPreloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgPreloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
