import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvBannerComponent } from './adv-banner.component';

describe('AdvBannerComponent', () => {
  let component: AdvBannerComponent;
  let fixture: ComponentFixture<AdvBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
