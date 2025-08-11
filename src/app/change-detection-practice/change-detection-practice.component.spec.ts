import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionPracticeComponent } from './change-detection-practice.component';

describe('ChangeDetectionPracticeComponent', () => {
  let component: ChangeDetectionPracticeComponent;
  let fixture: ComponentFixture<ChangeDetectionPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDetectionPracticeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDetectionPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
