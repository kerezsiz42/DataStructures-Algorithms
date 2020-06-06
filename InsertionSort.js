// Javascript program for insertion sort

/* Function to sort an array using insertion sort*/
function insertionSort(arr) {
  let i, j, key;
  for(i = 1; i < arr.length; i++) {
    key = arr[i];
    j = i - 1;

    /* Move elements of arr[0..i-1], that are  
    greater than key, to one position ahead  
    of their current position */
    while(j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}

/* Driver code */
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
insertionSort(numbers);
console.log(numbers);

// This code is contributed by Zoltan Kerezsi