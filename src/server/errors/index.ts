export class BaseError extends Error {
  public constructor(msg?: string) {
    super(msg);
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
  }
}

export class NotFoundError extends BaseError {
  constructor() {
    super('Entity not found');
  }
}

export class MissingPropertyError extends BaseError {
  constructor(properties: string[]) {
    super(`Missing properties: ${properties.join(', ')}`);
  }
}

export class InvalidPriceError extends BaseError {
  constructor() {
    super('Invalid price');
  }
}