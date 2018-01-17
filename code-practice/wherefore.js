
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  console.log(collection, Object.keys(collection), source);

  console.log(Object.keys(source), Object.values(source));

  for (var i = 0; i < collection.length; i++) {
    if(collection[i].hasOwnProperty(Object.keys(source))) {
      if (collection[i] == Object.values(source)) {
        arr.push(collection[i]);
      }
    }
  }
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
