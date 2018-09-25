let makeIterator = function (arr) {
  let currentIndex = 0;
  return {
    next: function () {
      return currentIndex < arr.length ? { value: arr[currentIndex++], done: false } : { done: true };
    }
  };
};

let iterator = makeIterator([1, 2, 3, 4, 5]);

while (1) {
  let { value, done } = iterator.next();
  if (done) break;
  console.log(value);
}

function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let n = 0;
  for (let i = start, v = 4; i < end; i += step) {
    n += 1;
    yield i;
  }
  return n;
}

var it = makeRangeIterator(1, 10, 2);

var result = it.next();
while (!result.done) {
  console.log(result.value); // 1 3 5 7 9
  result = it.next();
}

console.log("Iterated over sequence of size: ", result.value);