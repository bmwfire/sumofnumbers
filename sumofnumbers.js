function sumFor(list) {
  let result = 0;
  for (const l of list) {
    result += l;
  }
  return result;
}

function sumWhile(list) {
  let result = 0;
  let i = 0;
  while (i < list.length) {
    result += list[i];
    i++;
  }
  return result;
}

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1, list.length));
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; }, 0);
}


const testList = [1, 2, 3, 4, 5];
console.log(sumFor(testList));
console.log(sumWhile(testList));
console.log(sumRecursion(testList));
console.log(sumTheSimpleWay(testList));
