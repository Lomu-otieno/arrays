// for (i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     output += i + " FizzBuzz <br>";
//   } else if (i % 3 === 0) {
//     output += i + " Fizz <br>";
//   } else if (i % 5 === 0) {
//     output += i + " Buzz<br>";
//   }
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 20 === 0) {
//     continue;
//   }
//   output += i + "<br>";
// }

/// WHILE LOOP///

// while (i < 100) {
//   output += i + "<br>";
//   i++;
// }

///DO WHILE///

// do {
//   output += i + "<br>";
//   i++;
// } while (i <= 100);

///BUBBLE SORT////////

let output = "";
// function BubbleSort(arr) {
//   let swapped;
//   do {
//     swapped = false;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let permanent = arr[i + 1];
//         arr[i + 1] = arr[i];
//         arr[i] = permanent;
//         swapped = true;
//       }
//     }
//   } while (swapped);
// }
// function BubbleSort(arr) {
//   for (let j = 0; j < arr.length - 1; j++) {
//     for (let i = 0; i < arr.length - 1 - j; i++) {
//       if (arr[i] < arr[i + 1]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//       }
//     }
//   }
// }
// let arr = [-10, -3, 10, 4, -5, 8, 6, 21];
// BubbleSort(arr);
// output = arr;

// document.getElementById("counter").innerHTML = output;

function printRange(range) {
  for (let i = 0; i <= range; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output += i + "   FizzBuzz<br>";
    } else if (i % 5 === 0) {
      output += i + "   Fizz<br>";
    } else if (i % 3 === 0) {
      output += i + "   Buzz<br>";
    } else {
      output += i + "   none<br>";
    }
  }
}
let range = 100;
printRange(range);
document.getElementById("counter").innerHTML = output;
