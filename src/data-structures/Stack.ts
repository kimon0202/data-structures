import { Option } from '../utils/types';

export class Stack<T> {
  private readonly buffer: T[];

  public constructor() {
    this.buffer = [];
  }

  public get length(): number {
    return this.buffer.length;
  }

  public peek(): Option<T> {
    if (this.buffer.length === 0) return null;
    return this.buffer[this.buffer.length - 1];
  }

  public push(value: T): void {
    this.buffer.push(value);
  }

  public pop(): Option<T> {
    return this.buffer.pop() || null;
  }

  public toArray(): T[] {
    return this.buffer;
  }

  public toString(): string {
    return this.buffer.map(i => `${i}`).join(',');
  }
}
