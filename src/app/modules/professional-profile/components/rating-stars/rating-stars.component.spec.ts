import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingStarsComponent } from './rating-stars.component';

describe('RatingStarsComponent', () => {
  let component: RatingStarsComponent;
  let fixture: ComponentFixture<RatingStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RatingStarsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RatingStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getRatingStars', () => {
    const testCases = [
      { input: 0, expected: [false, false, false, false, false] },
      { input: 1, expected: [true, false, false, false, false] },
      { input: 2, expected: [true, true, false, false, false] },
      { input: 3, expected: [true, true, true, false, false] },
      { input: 4, expected: [true, true, true, true, false] },
      { input: 5, expected: [true, true, true, true, true] },
    ];

    it('should return [true, true, true, true, true]', () => {
      expect(component).toBeTruthy();
    });

    testCases.forEach((test, index) => {
      it(`should return ${test.expected} when input is ${
        test.input
      } (testcase: ${index + 1})`, () => {
        const result = component.getRatingStars(test.input);
        expect(result).toEqual(test.expected);
      });
    });
  });
});
