import { Stack } from '../../src/data-structures/Stack';

describe('Stack', () => {
  it('should create a empty stack', () => {
    const stack = new Stack();
    expect(stack).toHaveLength(0);
  });

  it('should push an element to the stack', () => {
    const stack = new Stack<number>();
    stack.push(1);

    expect(stack.peek()).toBe(1);
  });

  it('should pop an element off the stack', () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack).toHaveLength(3);
    expect(stack.pop()).toBe(3);
    expect(stack.peek()).toBe(2);
    expect(stack).toHaveLength(2);
  });

  it('should convert the stack in an array', () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.toArray()).toStrictEqual([1, 2, 3]);
  });

  it('should convert the stack to a string', () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.toString()).toBe('1,2,3');
  });

  it('should return null if trying to peek empty stack', () => {
    const stack = new Stack<number>();
    expect(stack.peek()).toBeNull();
  });

  it('should return null if trying to pop empty stack', () => {
    const stack = new Stack<number>();
    expect(stack.pop()).toBeNull();
  });
});
