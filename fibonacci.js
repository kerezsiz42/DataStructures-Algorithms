function fibonacci() {
  let cache = {};
  return function fib(n) {
    if(n in cache) {
      return cache[n];
    } else {
      if(n < 2) {
        return n;
      }
      cache[n] = fib(n-1) + fib(n-2);
      return cache[n];
    }
  }
}

const memoized = fibonacci();

console.log(memoized(70));