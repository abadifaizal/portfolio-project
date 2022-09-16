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

var suspects = ["Miss Scarlet", "Colonel Mustard", "Mr. White"];
var suspectsList = [];

for(let i =0 ; i < suspects.length; i++) {
  suspectsList.push(createSuspectsObjects(suspects[i]).speak());
}

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