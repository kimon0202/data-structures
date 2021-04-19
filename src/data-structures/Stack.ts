/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Option, None, Some } from '../utils/Option';
import { last } from '../utils/array';

export class Stack<T> {
  private readonly buffer: T[];

  public constructor(size = 0) {
    this.buffer = new Array<T>(size);
  }

  public get length(): number {
    return this.buffer.length;
  }

  public peek(): Option<T> {
    if (this.length === 0) return None();
    return Some(last(this.buffer));
  }

  public push(value: T): void {
    this.buffer.push(value);
  }

  public pop(): Option<T> {
    if (this.length === 0) return None();
    return Some(this.buffer.pop()!);
  }
}
