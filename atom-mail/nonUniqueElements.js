/*
You are given a non-empty list of integers (X).

For this task, you should return a list consisting of
only the non-unique elements in this list.

To do so you will need to remove all unique elements
(elements which are contained in a given list only once).

When solving this task, do not change the order of the list.

Example:

input (array of integers): [1, 2, 3, 1, 3]
output (iterable of integers): [1, 3, 1, 3]

1 and 3 are non-unique elements.

More examples:

nonUniqueElements([1, 2, 3, 1, 3]) == [1, 3, 1, 3]
nonUniqueElements([1, 2, 3, 4, 5]) == []
nonUniqueElements([5, 5, 5, 5, 5]) == [5, 5, 5, 5, 5]
nonUniqueElements([10, 9, 10, 10, 9, 8]) == [10, 9, 10, 10, 9]
 */

export default function nonUniqueElements(data) {
  // your solution goes here
  let array_size = data.length;
  var data_copy = data.slice();
  let counter = 0
  for (let i = 0; i < array_size; i++){
    var check_left = data_copy.slice(0,i).includes(data_copy[i])
    var check_right = data_copy.slice(i+1,array_size).includes(data_copy[i])
    //console.log(`check left = ${check_left}, check_right = ${check_right}`)
    if  (check_left || check_right){
    }
    else {
      data.splice(i-counter, 1);
      counter += 1
    } 
  }
  return data;
}

