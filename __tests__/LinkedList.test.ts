import { LinkedList } from '../src/LinkedList';

describe('Linked List', () => {
  it('should create a new Linked List with a head node', () => {
    const list = new LinkedList(10);
    expect(list.head).toHaveProperty('value', 10);
  });

  it('should insert a new node at head of the list', () => {
    const list = new LinkedList();
    list.insert(10);

    expect(list.head).toHaveProperty('value', 10);
  });

  it('should insert a new node at the end of the list', () => {
    const list = new LinkedList(10);
    list.insert(10);

    expect(list.head?.next).toHaveProperty('value', 10);
  });

  it('should get the value at the head of the list', () => {
    const list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);

    expect(list.get(0)).toBe(1);
  });

  it('should get the value at a random index of the list', () => {
    const list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insert(5);
    list.insert(6);
    list.insert(7);

    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(2);
    expect(list.get(2)).toBe(3);
    expect(list.get(3)).toBe(4);
    expect(list.get(4)).toBe(5);
    expect(list.get(5)).toBe(6);
    expect(list.get(6)).toBe(7);
    expect(list.get(7)).toBeUndefined();
  });
});
