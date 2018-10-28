module.exports = function recursion(tree) {
  const arr = [];
  if ({}.hasOwnProperty.call(tree, 'value')) {
    arr.push([tree.value]);
  }
  const queue = [];
  if ({}.hasOwnProperty.call(tree, 'left')) {
    queue.push(tree.left);
  }
  if ({}.hasOwnProperty.call(tree, 'right')) {
    queue.push(tree.right);
  }
  const flatten = (children) => {
    const leafValues = [];
    const childLeaves = [];
    while (children.length) {
      const leaf = children.shift();
      if ({}.hasOwnProperty.call(leaf, 'value')) {
        leafValues.push(leaf.value);
      }
      if ({}.hasOwnProperty.call(leaf, 'left')) {
        childLeaves.push(leaf.left);
      }
      if ({}.hasOwnProperty.call(leaf, 'right')) {
        childLeaves.push(leaf.right);
      }
    }
    if (leafValues.length) {
      arr.push([...leafValues]);
    }
    if (childLeaves.length) {
      flatten(childLeaves);
    }
  };
  flatten(queue);
  return arr;
};
