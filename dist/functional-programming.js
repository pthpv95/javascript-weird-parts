console.log("--------the beauty of functional programming-------------");

function mapForEach(arr, fn) {
  var arrTem = [];
  for (let index = 0; index < arr.length; index++) {
    arrTem.push(fn(arr[index]));
  }
  return arrTem;
}

var myArr = [1, 5, 7, 9, 4, 6, 2];

var result = mapForEach(myArr, function (item) {
  return item % 2 === 0;
});

var dup = [1, 2, 7, 2, 4, 7, 2];

var removedDuplicatedArrs = myArr.sort().reduce((acc, current) => {
  if (acc.indexOf(current) < 0) {
    acc.push(current);
  }

  return acc;
}, []);

console.log(removedDuplicatedArrs);

console.log(result);