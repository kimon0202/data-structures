import { LinkedList } from './LinkedList';
import { Option } from '../utils/types';

export class Queue<T> {
  private readonly list: LinkedList<T>;
  private _length: number;

  public constructor() {
    this.list = new LinkedList<T>();
    this._length = 0;
  }

  public get length(): number {
    return this._length;
  }

  public enqueue(value: T): void {
    this.list.append(value);
    this._length++;
  }

  public dequeue(): Option<T> {
    this._length--;
    return this.list.removeHead()?.value || null;
  }

  public peek(): Option<T> {
    return this.list.head?.value || null;
  }

  public toArray(): T[] {
    return this.list.toArray().reverse();
  }

  public toString(): string {
    return this.list
      .toArray()
      .reverse()
      .map(i => `${i}`)
      .join(',');
  }
}
