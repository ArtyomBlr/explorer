import { PopulationPipe } from './population.pipe';

describe('PopulationPipe', () => {
  let pipe: PopulationPipe;

  beforeEach(() => {
    pipe = new PopulationPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform value between 1000 and 999,999', () => {
    const value = 1500;
    const result = pipe.transform(value);
    expect(result).toEqual('1.5 k');
  });

  it('should transform value between 1,000,000 and 999,999,999', () => {
    const value = 2500000;
    const result = pipe.transform(value);
    expect(result).toEqual('2.5 mln');
  });

  it('should transform value between 1,000,000,000 and 999,999,999,999', () => {
    const value = 8000000000;
    const result = pipe.transform(value);
    expect(result).toEqual('8.0 b');
  });

  it('should transform value greater than 999,999,999,999', () => {
    const value = 2000000000000;
    const result = pipe.transform(value);
    expect(result).toEqual('2.0 t');
  });
});
