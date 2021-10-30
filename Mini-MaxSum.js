function miniMaxSum(arr) {
  let min = arr.reduce((a, b) => a + b, 0) - Math.max.apply(Math, arr);
  let max = arr.reduce((a, b) => a + b, 0) - Math.min.apply(Math, arr);

  console.log(min, max);
}
