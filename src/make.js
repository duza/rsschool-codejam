module.exports = function make(...args) {
  let allPassedArgs = [...args];
  const recursion = (...newArgs) => {
    if (newArgs[0] instanceof Function) {
      return allPassedArgs.reduce(newArgs[0]);
    }
    allPassedArgs = allPassedArgs.concat(newArgs);
    return recursion;
  };
  return recursion;
};
