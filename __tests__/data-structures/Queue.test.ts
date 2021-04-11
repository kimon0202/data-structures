import { Queue } from '../../src/data-structures/Queue';

describe('Queue', () => {
  it('should create a empty stack', () => {
    const queue = new Queue();
    expect(queue).toHaveLength(0);
  });

  it('should enqueue a value', () => {
    const queue = new Queue<number>();
    queue.enqueue(1);

    expect(queue).toHaveLength(1);
    expect(queue.peek()).toBe(1);
  });

  it('should dequeue a value', () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue).toHaveLength(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue).toHaveLength(1);
    expect(queue.peek()).toBe(2);
  });

  it('should convert the queue in an array', () => {
    const stack = new Queue<number>();
    stack.enqueue(1);
    stack.enqueue(2);
    stack.enqueue(3);

    expect(stack.toArray()).toStrictEqual([3, 2, 1]);
  });

  it('should convert the queue to a string', () => {
    const stack = new Queue<number>();
    stack.enqueue(1);
    stack.enqueue(2);
    stack.enqueue(3);

    expect(stack.toString()).toBe('3,2,1');
  });

  it('should return null if trying to peek empty queue', () => {
    const queue = new Queue<number>();
    expect(queue.peek()).toBeNull();
  });

  it('should return null if trying to dequeue empty queue', () => {
    const queue = new Queue<number>();
    expect(queue.dequeue()).toBeNull();
  });
});
