import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArabicToRomanComponent } from './arabic-to-roman.component';

describe('ArabicToRomanComponent', () => {
  let component: ArabicToRomanComponent;
  let fixture: ComponentFixture<ArabicToRomanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArabicToRomanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArabicToRomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
