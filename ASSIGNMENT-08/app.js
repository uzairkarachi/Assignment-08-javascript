// Sorting an Array Without Using Sort Method:

// 1. Create an array of numbers with any random values.
// 2. Sort the numbers in ascending & descending order without method.
// Ascending Order 

var array = [1, 120, 33, 14, 50, 96, 27, 48, 99, 130];
for (var i = 0; i < array.length; i++) {
  for (var j = i + 1; j < array.length; j++) {
    if (array[i] > array[j]) {
      var temporary = array[i];
      array[i] = array[j];
      array[j] = temporary;
    }
  }
}
console.log(array);

// Descending Order

var array = [1, 120, 33, 14, 50, 96, 27, 48, 99, 130];
for (var i = 0; i < array.length; i++) {
  for (var j = i + 1; j < array.length; j++) {
    if (array[i] < array[j]) {
      var temporary = array[i];
      array[i] = array[j];
      array[j] = temporary;
    }
  }
}
console.log(array);