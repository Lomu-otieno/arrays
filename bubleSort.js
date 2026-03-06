let output = "";

function BubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let switched = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = switched;
        swapped = true;
      }
    }
  } while (swapped);
}

let arr = [100, 45, 34, 76, 87, 45, 3, 6, 8, 90, 56, 45, 33];
BubbleSort(arr);
output = arr;
document.getElementById("counter").innerHTML = output;
