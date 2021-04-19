import { Stack } from '../../src/data-structures/Stack';
import { isNone, isSome } from '../../src/utils/Option';

describe('Stack', () => {
  it('should create a empty stack', () => {
    const stack = new Stack<number>();
    expect(stack).toHaveLength(0);
  });

  it('should create a stack with size 5', () => {
    const stack = new Stack<number>(5);
    expect(stack).toHaveLength(5);
  });

  it('should return None when peeking an empty stack', () => {
    const stack = new Stack<number>();
    const v = stack.pop();

    expect(isNone(v)).toBe(true);
  });

  it('should return None when popping from an empty stack', () => {
    const stack = new Stack<number>();
    const peek = stack.peek();

    expect(isNone(peek)).toBe(true);
  });

  it('should push an item to the stack', () => {
    const stack = new Stack<number>();

    stack.push(5);
    expect(stack).toHaveLength(1);
  });

  it('should return an item when peeking', () => {
    const stack = new Stack<number>();
    stack.push(5);

    const peek = stack.peek();
    expect(isSome(peek)).toBe(true);
    expect(peek.unwrap()).toBe(5);
  });

  it('should pop an item from the stack', () => {
    const stack = new Stack<number>();
    stack.push(5);

    const v = stack.pop();
    expect(stack).toHaveLength(0);
    expect(isNone(stack.peek())).toBe(true);
    expect(isSome(v)).toBe(true);
    expect(v.unwrap()).toBe(5);
  });
});
