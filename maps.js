arr = ["biggie smalls", "dic tanin", "tiffany dow"];

function myMap (arr, callback) {

  var newArray = [];
  for (var i = 0; i < arr.length; i++) {

    var changedArr = callback(arr[i]);

    newArray.push(changedArr);
  }
    console.log("NA", newArray);
    return newArray;
   }

myMap(arr, function(word) {
  return word.length;
});

myMap(arr, function(word) {
  return word.toUpperCase();
});

myMap(arr, function(word) {
  return word.split('').reverse().join('');
});
