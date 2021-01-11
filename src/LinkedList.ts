/* eslint-disable max-classes-per-file */
type Nullable<Type> = Type | null;

export class Node<DataType> {
  private _value: DataType;
  private _next: Nullable<Node<DataType>>;

  public constructor(value: DataType) {
    this._value = value;
    this._next = null;
  }

  public get value(): DataType {
    return this._value;
  }

  public get next(): Nullable<Node<DataType>> {
    return this._next;
  }

  public set next(value: Nullable<Node<DataType>>) {
    this._next = value;
  }
}

export class LinkedList<DataType> {
  public head: Nullable<Node<DataType>>;

  public constructor(headValue?: DataType) {
    if (!headValue) this.head = null;
    else this.head = new Node(headValue);
  }

  private insertAt(node: Node<DataType>, value: DataType): Node<DataType> {
    const nodeToInsert = new Node(value);
    node.next = nodeToInsert;

    return nodeToInsert;
  }

  public insert(value: DataType): Node<DataType> {
    if (this.head === null) {
      const node = new Node(value);
      this.head = node;

      return node;
    }

    let node = this.head;
    while (node.next !== null) node = node.next;
    return this.insertAt(node, value);
  }

  public get(index: number): DataType | undefined {
    if (index === 0) return this.head?.value;

    let node: Nullable<Node<DataType>> = this.head;
    let i = 0;
    while (i !== index) {
      if (!node) throw new Error(`Index out of bounderies!`);

      node = node.next;
      i++;
    }

    return node?.value;
  }
}
