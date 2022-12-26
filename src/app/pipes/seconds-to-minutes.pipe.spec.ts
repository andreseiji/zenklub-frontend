import { SecondsToMinutesPipe } from './seconds-to-minutes.pipe';

describe('SecondsToMinutesPipe', () => {
  it('create an instance', () => {
    const pipe = new SecondsToMinutesPipe();
    expect(pipe).toBeTruthy();
  });

  describe('When transform is called', () => {
    const testCases = [
      { input: 0, expected: '0 minutos' },
      { input: 59, expected: '0 minutos' },
      { input: 60, expected: '1 minuto' },
      { input: 119, expected: '1 minuto' },
      { input: 120, expected: '2 minutos' },
      { input: 3000, expected: '50 minutos' },
    ];

    testCases.forEach((test, index) => {
      it(`should transform ${test.input} to ${
        test.expected
      } correctly (testcase: ${index + 1})`, () => {
        const pipe = new SecondsToMinutesPipe();
        const result = pipe.transform(test.input);
        expect(result).toBe(test.expected);
      });
    });
  });
});
