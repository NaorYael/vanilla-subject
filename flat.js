const arr = [1,4,9,[3,2,[1,7]], 4];
let temp = [];

function flat(numArr) {
  numArr.forEach(item => {
    if (Array.isArray(item)) {
      flat(item);
    } else {
      temp.push(item);
    }
  });
  return temp;
}

console.log(flat(arr));
