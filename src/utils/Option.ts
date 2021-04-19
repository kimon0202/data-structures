import { UnwrapNullValueError } from './errors/UnwrapNullValueError';

type OptionTag = 'None' | 'Some';
type MatchObject<T, Obj extends Option<T>, Return = unknown> = {
  [key in Obj['_tag']]: (value: 'None' extends key ? never : T) => Return;
};

export class Option<T> {
  public readonly _tag: OptionTag;
  public readonly value: T | null;

  private constructor(value?: T) {
    this._tag = value === undefined ? 'None' : 'Some';
    this.value = value === undefined ? null : value;
  }

  public static None<A>(): Option<A> {
    return new Option<A>();
  }

  public static Some<A>(value: A): Option<A> {
    return new Option(value);
  }

  public unwrap(): T {
    if (this.value === null) throw new UnwrapNullValueError();
    return this.value;
  }
}

export const None = <T>(): Option<T> => Option.None<T>();
export const Some = <T>(value: T): Option<T> => Option.Some(value);

export const match = <T, Return = unknown>(
  obj: Option<T>,
  clauses: MatchObject<T, typeof obj, Return>,
): Return => {
  if (obj.value === null) return clauses.None(null as never);
  return clauses.Some(obj.unwrap());
};

export const isNone = (value: Option<unknown>): boolean =>
  value._tag === 'None';

export const isSome = (value: Option<unknown>): boolean =>
  value._tag === 'Some';
