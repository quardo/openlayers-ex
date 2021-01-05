import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlInteractionComponent } from './ol-interaction.component';

describe('OlInteractionComponent', () => {
  let component: OlInteractionComponent;
  let fixture: ComponentFixture<OlInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlInteractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
