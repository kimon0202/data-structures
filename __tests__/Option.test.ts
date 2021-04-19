import { None, isNone, Some, isSome } from '../src/utils/Option';

describe('Option', () => {
  it('should create a None', () => {
    const n = None();
    expect(isNone(n)).toBe(true);
  });

  it('should create a Some', () => {
    const n = Some(5);
    expect(isSome(n)).toBe(true);
    expect(n.unwrap()).toBe(5);
  });

  it('should throw an error when unwraping a None', () => {
    const n = None();
    expect(() => n.unwrap()).toThrow();
  });
});
