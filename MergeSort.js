function mergeSort(arr) {
  if(arr.length == 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = [];
  const right = [];
  for(let i = 0; i < arr.length; i++) {
    if(i < middle) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while(i != left.length && j != right.length) {
    if(left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  while(i != left.length && j == right.length) {
    result.push(left[i]);
    i++;
  }
  while(j != right.length && i == left.length) {
    result.push(right[j]);
    j++;
  }
  return result;
}