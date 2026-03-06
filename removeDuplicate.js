function RemoveDuplicate(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let k = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[k] = arr[i];
      k++;
    }
  }
  return k;
}

function removeDuplicates(arr) {
  let k = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[k++] = arr[i];
    }
  }

  return k;
}

let arr;
arr = [0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5];

let output;
output = removeDuplicates(arr);
// output = RemoveDuplicate(arr);

document.getElementById("counter").innerHTML = output;
