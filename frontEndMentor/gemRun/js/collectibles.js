// do NOT remove the 'export' keyword
export class Collectible {
  // TODO: constructor, collect, getScore, and getCollectedMessage
  constructor(name, worth) {
    this.name = name;
    this.worth = worth;
    this.count = 0;
  }

  collect() {
    this.count++;
  }

  getScore() {
    return this.count * this.worth;
  }

  getCollectedMessage() {
    return `${this.count} ${this.name}s collected`;
  }
}

// do NOT remove the 'export' keyword
export class Coin extends Collectible {
  // TODO: constructor and inheritance
  constructor() {
    super("coin", 10);
  }
}

// do NOT remove the 'export' keyword
export class Gem extends Collectible {
  // TODO: constructor and inheritance
  constructor() {
    super("gem", 50);
  }
}
