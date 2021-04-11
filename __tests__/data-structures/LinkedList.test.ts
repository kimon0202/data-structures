import {
  LinkedListNode,
  LinkedList,
} from '../../src/data-structures/LinkedList';

describe('Linked List', () => {
  describe('Linked List Node', () => {
    it('should create a node with some value', () => {
      const node = new LinkedListNode(6);

      expect(node.value).toBe(6);
      expect(node.next).toBeNull();
    });

    it('should return a string representation of the node', () => {
      const node = new LinkedListNode(6);
      expect(node.toString()).toBe('6');
    });
  });

  it('should create a linked list from an array', () => {
    const array = [1, 2, 3, 4];
    const list = LinkedList.from(array);

    expect(list.toArray()).toStrictEqual(array);
    expect(list.head?.value).toBe(1);
    expect(list.head?.next?.value).toBe(2);
    expect(list.head?.next?.next?.value).toBe(3);
    expect(list.tail?.value).toBe(4);
    expect(list.tail?.next).toBeNull();
  });

  it('should create an empty list', () => {
    const list = new LinkedList();

    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  it('should append values to the head when the list is null', () => {
    const list = new LinkedList<number>();

    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();

    list.append(1);

    expect(list.head?.value).toBe(1);
    expect(list.tail).toStrictEqual(list.head);
  });

  it('should append values to the tail when head is not null', () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.head?.value).toBe(1);
    expect(list.head?.next?.value).toBe(2);
    expect(list.tail?.value).toBe(3);
    expect(list.tail?.next).toBeNull();
  });

  it('should prepend values to the head when the list is null', () => {
    const list = new LinkedList<number>();

    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();

    list.prepend(1);

    expect(list.head?.value).toBe(1);
    expect(list.tail).toStrictEqual(list.head);
  });

  it('should prepend values to the tail when head is not null', () => {
    const list = new LinkedList<number>();
    list.prepend(1);
    list.prepend(2);
    list.prepend(3);

    expect(list.head?.value).toBe(3);
    expect(list.head?.next?.value).toBe(2);
    expect(list.tail?.value).toBe(1);
    expect(list.tail?.next).toBeNull();
  });

  it('should return null if trying to remove head of empty list', () => {
    const list = new LinkedList<number>();
    const val = list.removeHead();

    expect(val).toBeNull();
  });

  it('should return a node when removing head', () => {
    const list = new LinkedList<number>();
    list.append(1);

    const val = list.removeHead();
    expect(val?.value).toBe(1);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  it('should return a node when removing head and correctly reset head', () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(2);

    const val = list.removeHead();
    expect(val?.value).toBe(1);
    expect(list.head?.value).toBe(2);
  });

  it('should return a node when removing tail', () => {
    const list = new LinkedList<number>();
    list.append(1);

    const val = list.removeTail();
    expect(val?.value).toBe(1);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  it('should return a node when removing tail and correctly reset tail', () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(2);

    const val = list.removeTail();
    expect(val?.value).toBe(2);
    expect(list.tail?.value).toBe(1);
  });

  it('should remove the tail and correctly reset it', () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list.append(6);
    list.append(7);
    list.append(8);

    const val = list.removeTail();
    expect(val?.value).toBe(8);
    expect(list.tail?.value).toBe(7);
    expect(list.tail?.next).toBeNull();
  });

  it('should return an array version of the linked list', () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(1);
    list.append(1);
    list.append(1);
    list.append(1);

    const arr = list.toArray();
    expect(arr).toStrictEqual([1, 1, 1, 1, 1]);
  });

  it('should return a string representation of the list', () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(2);
    list.append(3);

    const str = list.toString();
    expect(str).toBe('1,2,3');
  });

  it('should find the first occurrence of a value in a list', () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list.append(6);
    list.append(7);
    list.append(8);

    const node = list.find(5);
    expect(node?.value).toBe(5);
    expect(node?.next?.value).toBe(6);
  });

  it('should return null if searching in a empty list', () => {
    const list = new LinkedList<number>();
    expect(list.find(2)).toBeNull();
  });

  it('should delete a node with the specified value', () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);

    const node = list.delete(3);
    expect(node?.value).toBe(3);
    expect(node?.next?.value).toBe(4);
    expect(list.find(2)?.next?.value).toBe(4);
  });

  it('should return null if deleting from empty list', () => {
    const list = new LinkedList<number>();
    expect(list.delete(1)).toBeNull();
  });

  it('should delete a node with the specified value when head === tail', () => {
    const list = new LinkedList<number>();
    list.append(1);

    const node = list.delete(1);
    expect(node?.value).toBe(1);
    expect(list.head).toBeNull();
  });

  it('should delete a node with the specified value when it is in tail', () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(2);
    list.append(3);

    const node = list.delete(3);
    expect(node?.value).toBe(3);
    expect(list.head?.value).toBe(1);
    expect(list.tail?.value).toBe(2);
    expect(list.tail?.next).toBeNull();
  });

  it('should traverse the list', () => {
    const list = new LinkedList<number>();
    list.prepend(1);
    list.prepend(2);
    list.prepend(3);
    list.prepend(4);
    list.prepend(5);

    const arr: string[] = [];

    list.forEach(node => arr.push(node.toString()));
    expect(arr).toStrictEqual(['5', '4', '3', '2', '1']);
  });
});
