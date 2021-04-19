export class UnwrapNullValueError extends Error {
  public constructor() {
    super(`Unwraping a null value caused the program to crash.`);
  }
}
