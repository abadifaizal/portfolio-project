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

const getBigGroups = (groups) => {
  // console.log(groups.filter((group) => group.details.messageCount >= 100));
  return groups.filter((group) => group.details.messageCount >= 100);
};

// Sample usage
const groups = [
  {
    details: {
      messageCount: 30,
    },
  },
  {
    details: {
      messageCount: 1014,
    },
  },
];
getBigGroups(groups);

// ==========================================================================

function titleCase(str) {
  const newString = str.split(" ");
  let result = [];
  newString.forEach((string) => {
    result.push(string[0].toUpperCase() + string.substring(1).toLowerCase());
  });
  return result.join(" ");
}

// console.log(titleCase("I'm a little tea pot"));
// titleCase("sHoRt AnD sToUt");

// ==========================================================================

function frankenSplice(arr1, arr2, n) {
  let hako = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    hako.splice(n, 0, arr1[i]);
    n++;
  }
  return hako;
}

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// ==========================================================================

function bouncer(arr) {
  return arr.filter((item) => Boolean(item));
}

bouncer([7, "ate", "", false, 9]);
bouncer(["a", "b", "c"]);
bouncer([false, null, 0, NaN, undefined, ""]);
bouncer([null, NaN, 1, 2, undefined]);

// ==========================================================================

// console.log(Math.sign(-3));
// console.log(Math.sign(3));
// console.log(Math.sign(-0));
// console.log(Math.sign(0));

// fix Math.sign(..)
function sign(v) {
  return v !== 0 ? Math.sign(v) : Object.is(v, -0) ? -1 : 1;
}

// console.log(sign(-3));
// console.log(sign(3));
// console.log(sign(-0));
// console.log(sign(0));

// ==========================================================================

// if (!Object.is /*|| true*/) {
//   Object.is = function ObjectIs(x, y) {
//     var xNegZero = isItNegZero(x);
//     var yNegZero = isItNegZero(y);

//     if (xNegZero || yNegZero) {
//       return xNegZero && yNegZero;
//     } else if (isItNaN(x) && isItNaN(y)) {
//       return true;
//     } else if (x === y) {
//       return true;
//     }

//     return false;

//     // **********

//     function isItNegZero(v) {
//       return v === 0 && 1 / v === -Infinity;
//     }

//     function isItNaN(v) {
//       return v !== v;
//     }
//   };
// }

// console.log(Object.is(42, 42) === true);
// console.log(Object.is("foo", "foo") === true);
// console.log(Object.is(false, false) === true);
// console.log(Object.is(null, null) === true);
// console.log(Object.is(undefined, undefined) === true);
// console.log(Object.is(NaN, NaN) === true);
// console.log(Object.is(-0, -0) === true);
// console.log(Object.is(0, 0) === true);

// console.log(Object.is(-0, 0) === false);
// console.log(Object.is(0, -0) === false);
// console.log(Object.is(0, NaN) === false);
// console.log(Object.is(NaN, 0) === false);
// console.log(Object.is(42, "42") === false);
// console.log(Object.is("42", 42) === false);
// console.log(Object.is("foo", "bar") === false);
// console.log(Object.is(false, true) === false);
// console.log(Object.is(null, undefined) === false);
// console.log(Object.is(undefined, null) === false);
