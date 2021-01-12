import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlAddFeatureComponent } from './ol-add-feature.component';

describe('OlAddFeatureComponent', () => {
  let component: OlAddFeatureComponent;
  let fixture: ComponentFixture<OlAddFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlAddFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlAddFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
