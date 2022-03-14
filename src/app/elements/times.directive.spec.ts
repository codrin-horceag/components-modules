import { TimesDirective } from './times.directive';

describe('TimesDirective', () => {
  it('should create an instance', () => {
    let directive: TimesDirective;
    // @ts-ignore
    directive = new TimesDirective();
    expect(directive).toBeTruthy();
  });
});
