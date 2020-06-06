function selectionSort(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for(let n = i + 1; n < arr.length; n++) {
      if(arr[n] < arr[minIndex]) {
        minIndex = n;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
}