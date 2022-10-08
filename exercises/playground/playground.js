const game = {
  'suspects': [
    {
      name: "Rusty",
      color: "Orange",
    },
    {
      name: "Miss Scarlet",
      color: "Red",
    }
  ]
}

game.suspects.forEach(suspect => {
  // console.log(suspect);
  if (suspect.name === "Rusty") {
    console.log('The Suspect is ' + suspect.name + ' Found \'em !');
  }
});

// Distructuring
const [ { color: firstColor }, { color: secondColor } ] = game.suspects;

function createSuspectsObjects(name) {
  return {
    name: name,
    // color: name.split("")[1],
    speak() {
      console.log("My name is ", name);
    }
  }
}

// var suspects = ["Miss Scarlet", "Colonel Mustard", "Mr. White"];
// var suspectsList = [];

// for(let i =0 ; i < suspects.length; i++) {
//   suspectsList.push(createSuspectsObjects(suspects[i]).speak());
// }

const _ = {};

// EACH function
_.each = function(list, callBack) {
  if(Array.isArray(list)) {
    // loop through array
    for(let i = 0; i < list.length; i++) {
      // call the callback with a list item
      callBack(list[i], i, list);
    }
  } else {
    // loop through object
    for(let key in list) {
      callBack(list[key], key, list);
    }
  }
}

// TESTING EACH function
_.each(['sally', 'georgie', 'porgie'], function(name, i, list) {
  if(list[i + 1]) {
    console.log(name, 'is younger than', list[i + 1]);
  } else {
    console.log(name, 'is the oldest');
  }
})

_.each(game, function(property, propertyName) {
  console.log(property);
  console.log(propertyName);
  console.log(property[1].name);
  console.log(property[0].color);
})

// MAP function
_.map = function(list, callBack) {
  // Create empty array to store
  const storage = [];
  // loop
  // for(let i = 0; i < list.length; i++) {
  //   storage.push(callBack(list[i], i, list));
  // }
  _.each(list, function(val, i, list) {
    storage.push(callBack(val, i, list));
  });
  // return 
  return storage;
}

// TESTING MAP function
_.map([1,2,3], function(val) {
  console.log(val + 1);
})

// FILTER function
_.filter = function(list, callBack) {
  // Create new array
  const storage = [];
  // loop through array
  // for(let i = 0; i < list.length; i++) {
  //   // check if callback returns true
  //   if(callBack(list[i], i, list)) {
  //     // if true push into array
  //     storage.push(list[i]);
  //   }
  // }
  _.each(list, function(item, i, list) {
    if(callBack(item, i, list)) {
      storage.push(item);
    }
  });
  // return
  return storage;
}

// TESTING FILTER function
const videoData = [
  {
    name: 'Miss Scartlet',
    present: true,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billiard room': false},
      {library: false}
    ]
  },
  {
    name: 'Mrs White',
    present: false,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billiard room': false},
      {library: false}
    ]
  }
]

_.map(videoData, function(suspectObject){
  // if(suspectObject.present === true) {
  //   console.log(suspectObject.name);
  // }
  console.log(suspectObject.present);
})

// Arrow function
const suspects = _.filter(videoData, function(suspectObject) {
  return suspectObject.present;
})

const suspectsNames = _.map(suspects, suspect => {
  console.log(suspect.name);
  return suspect.name;
})

// Spread operator with arrow function
// const createTuple = (a, b, c, d) => {
//   console.log(arguments);
//   console.log([[a, c], [b, d]]);
//   return [[a, c], [b, d]];
// }

// const createTuple = function(a, b, c, ...d) {
//   console.log(arguments);
// }

// createTuple('It', 'be', 'could', 'anyone', 'no one');

const constructArr = function() {
  const arr = Array.prototype.slice.call(arguments);
  arr.push('the billards room?');
  console.log(arr.join(' '));
  // return ;
}

constructArr('was', 'it', 'in');

// FROM function
_.from = function(list, callBack) {
  const storage = [];
  _.each(list, function(val, i, list) {
    storage.push(callBack(val, i, list));
  });
  // return 
  return storage;
}

_.reduce = function(list, callBack, initial) {
  // loop through the list
  let memo = initial; // 0, 1, 3
  for(let i = 0; i < list.length; i++) {
    // call the callback with arr[i], prev/initial
    if(i === 0 && memo === undefined) {
      memo = list[0];
    } else {
      memo = callBack(list[i], memo);
      // i is from loop iteration, 
      // list[i] is from function argument, 
      // memo is from iteration value
      // i = 0, list[i] = 1, memo = 0 => 1 + 0 = 1
      // i = 1, list[i] = 2, memo = 1 => 2 + 1 = 3
      // i = 2, list[i] = 3, memo = 3 => 3 + 3 = 6
    }
  }
  // return result
  console.log(memo);
  return memo;
}

_.reduce([1, 2, 3], (v, sum) => v + sum, 0);
_.reduce([2, 3, 5], (v, sum) => v + sum);