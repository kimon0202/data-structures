/* eslint-disable no-return-assign */
import { Option, None, Some, isSome, match, isNone } from '../utils/Option';

export class LinkedListNode<T> {
  public value: T;
  public next: Option<LinkedListNode<T>>;

  public constructor(value: T) {
    this.value = value;
    this.next = None();
  }
}

export class LinkedList<T> {
  public head: Option<LinkedListNode<T>>;

  public constructor(head?: T) {
    this.head = !head ? None() : Some(new LinkedListNode(head));
  }

  public append(value: T): void {
    match(this.head, {
      None: () => {
        this.head = Some(new LinkedListNode(value));
      },
      Some: val => {
        let current = val;
        while (isSome(current.next)) {
          current = current.next.unwrap();
        }

        const node = new LinkedListNode(value);
        current.next = Some(node);
      },
    });
  }

  public prepend(value: T): void {
    this.head = match(this.head, {
      None: () => Some(new LinkedListNode(value)),
      Some: val => {
        const node = new LinkedListNode(value);
        node.next = Some(val);

        return Some(node);
      },
    });
  }

  public deleteHead(): void {
    this.head = match(this.head, {
      None: () => None(),
      Some: val => (isSome(val.next) ? val.next : None()),
    });
  }

  public deleteTail(): void {
    match(this.head, {
      None: () => None(),
      Some: val => {
        let current = val;
        while (isSome(current.next.unwrap().next)) {
          current = current.next.unwrap();
        }

        return (current.next = None());
      },
    });
  }

  public delete(value: T): void {
    match(this.head, {
      None: () => None(),
      Some: val => {
        let current = val;
        while (current.next.unwrap().value !== value) {
          current = current.next.unwrap();
        }

        const rest = match(current.next, {
          None: () => None() as Option<LinkedListNode<T>>,
          Some: restVal => restVal.next,
        });

        return (current.next = rest);
      },
    });
  }

  public find(value: T): Option<LinkedListNode<T>> {
    return match(this.head, {
      None: () => None(),
      Some: node => {
        if (node.value === value) return Some(node);

        let current = node;
        while (current.value !== value) {
          if (isNone(current.next)) return None();
          current = current.next.unwrap();
        }

        return Some(current);
      },
    });
  }
}
