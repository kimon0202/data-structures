/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Option } from '../utils/types';

export class LinkedListNode<T> {
  public value: T;
  public next: Option<LinkedListNode<T>>;

  public constructor(value: T) {
    this.value = value;
    this.next = null;
  }

  public toString(): string {
    return `${this.value}`;
  }
}

export class LinkedList<T> {
  public head: Option<LinkedListNode<T>>;
  public tail: Option<LinkedListNode<T>>;

  public constructor() {
    this.head = null;
    this.tail = null;
  }

  public append(value: T): void {
    if (this.head == null) {
      this.head = new LinkedListNode(value);
      this.tail = this.head;
      return;
    }

    const node = new LinkedListNode(value);
    this.tail!.next = node;
    this.tail = node;
  }

  public prepend(value: T): void {
    if (this.head == null) {
      this.head = new LinkedListNode(value);
      this.tail = this.head;
      return;
    }

    const node = new LinkedListNode(value);
    node.next = this.head;
    this.head = node;
  }

  public removeHead(): Option<LinkedListNode<T>> {
    if (!this.head) return null;

    if (this.head === this.tail) {
      const toRet = this.head;

      this.head = null;
      this.tail = null;

      return toRet;
    }

    const node = this.head.next;
    const toRet = this.head;

    this.head = node;
    return toRet;
  }

  public removeTail(): Option<LinkedListNode<T>> {
    if (this.head === this.tail) {
      const toRet = this.tail;

      this.head = null;
      this.tail = null;

      return toRet;
    }

    const node = this.tail;

    let newTail = this.head;
    while (newTail?.next !== node) {
      newTail = newTail!.next;
    }

    this.tail = newTail;
    newTail.next = null;
    return node;
  }

  public find(value: T): Option<LinkedListNode<T>> {
    let current = this.head;
    if (current === null) return null;

    while (current?.value !== value) {
      if (current?.next === null) return null;

      current = current.next;
    }

    return current;
  }

  public delete(value: T): Option<LinkedListNode<T>> {
    if (this.head?.value === value) return this.removeHead();

    let current = this.head;
    if (current === null) return null;

    while (current?.next?.value !== value) {
      if (current?.next === null) return null;
      current = current.next;
    }

    const toDel = current.next;
    if (toDel === this.tail) return this.removeTail();

    const after = toDel.next;

    current.next = after;
    return toDel;
  }

  public toArray(): T[] {
    const arr = new Array<T>();

    let current = this.head;
    while (current !== null) {
      arr.push(current.value);
      current = current.next;
    }

    return arr;
  }

  public forEach(callback: (node: LinkedListNode<T>) => void): void {
    let current = this.head;

    while (current !== null) {
      callback(current);
      current = current.next;
    }
  }

  public toString(): string {
    const arr = new Array<LinkedListNode<T>>();

    let current = this.head;
    while (current !== null) {
      arr.push(current);
      current = current.next;
    }

    return arr.map(node => node.toString()).join(',');
  }
}
