import { UnwrapNullValueError } from './errors/UnwrapNullValueError';

type MatchObject<T, Obj extends Option<T>, Return = unknown> = {
  [key in Obj['wrapper']['_tag']]: (
    value: 'None' extends key ? never : T,
  ) => Return;
};

type OptionVariant<T> = { _tag: 'None' } | { _tag: 'Some'; value: T };

export class Option<T> {
  public readonly wrapper: OptionVariant<T>;

  private constructor(value?: T) {
    this.wrapper =
      value === undefined || value === null
        ? { _tag: 'None' }
        : { _tag: 'Some', value };
  }

  public static None<A>(): Option<A> {
    return new Option<A>();
  }

  public static Some<A>(value: A): Option<A> {
    return new Option(value);
  }

  public unwrap(): T {
    if (this.wrapper._tag === 'None') throw new UnwrapNullValueError();
    return this.wrapper.value;
  }
}

export const None = <T>(): Option<T> => Option.None<T>();
export const Some = <T>(value: T): Option<T> => Option.Some(value);

export const match = <T, Return = void>(
  obj: Option<T>,
  clauses: MatchObject<T, typeof obj, Return>,
): Return => {
  if (obj.wrapper._tag === 'None') return clauses.None(null as never);
  return clauses.Some(obj.unwrap());
};

export const isNone = (value: Option<unknown>): boolean =>
  value.wrapper._tag === 'None';

export const isSome = (value: Option<unknown>): boolean =>
  value.wrapper._tag === 'Some';
