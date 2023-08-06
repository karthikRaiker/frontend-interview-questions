const twoSum = (arr, target) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let n = arr[i];
    if (obj[target - n] >= 0) {
      console.log(obj);
      return [obj[target - n], i];
    } else {
      obj[n] = i;
    }
  }
};
console.log(twoSum([3, 2, 4], 7));
