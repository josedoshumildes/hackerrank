function plusMinus(arr) {
  let positives = arr.filter((num) => num > 0).length / arr.length;
  let negatives = arr.filter((num) => num < 0).length / arr.length;
  let zeros = arr.filter((num) => num == 0).length / arr.length;

  console.log(
    positives.toFixed(6) + '\n' + negatives.toFixed(6) + '\n' + zeros.toFixed(6)
  );
}
