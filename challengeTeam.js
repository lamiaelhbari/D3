// !start Bubble Sort :

function bubble(arr) {
  let n = arr.length;
  for (i = 0; i < n - 1; i++) {
    for (j = 0; j < n - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let max = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = max;
      }
    }
  }
  return arr;
}
// const numbers = [64, 34, 25, 12, 22, 11, 90];
// console.log("Original array:", numbers);
// const sortedArray = bubble(numbers.slice());
// // Create a copy to avoid modifying the original array
// console.log("Sorted array:", sortedArray);
// todo: End Bubble Sort :

// ---------------------------------------------------

// ! Start Selection Sort :
function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Assume the current index is the minimum
    let minIndex = i;

    // Find the index of the minimum element in the unsorted part of the array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found minimum element with the first element
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
}

//   // Example usage:
//   const numbers = [64, 34, 25, 12, 22, 11, 90];
//   console.log("Original array:", numbers);
//   const sortedArray = selectionSort(numbers.slice()); // Create a copy to avoid modifying the original array
//   console.log("Sorted array:", sortedArray);

// todo :End  Selection Sort :
// ---------------------------------------------------

// !Start Insertion Sort :
function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    // Save the current element to be inserted
    let currentElement = arr[i];

    // Start comparing with the elements before and shift them to the right
    let j = i - 1;
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the current element at its correct position
    arr[j + 1] = currentElement;
  }

  return arr;
}

// Example usage:
// const numbers = [64, 34, 25, 12, 22, 11, 90];
// console.log("Original array:", numbers);
// const sortedArray = insertionSort(numbers.slice()); // Create a copy to avoid modifying the original array
// console.log("Sorted array:", sortedArray);
// todo: End Insertion Sort :
// ---------------------------------------------------

// !Start Linear Search :

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index if the target is found
    }
  }

  return -1; // Return -1 if the target is not found in the array
}

// Example usage:
