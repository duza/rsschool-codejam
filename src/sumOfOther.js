module.exports = function sumOfOther(arr) {
  return arr.map((item, i) => [...arr.slice(0, i), ...arr.slice(i + 1)].reduce((acc, el) => acc + el ));
}
