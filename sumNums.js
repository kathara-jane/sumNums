const sumNums = num => {
  let newNum = 0;
  for (let i = 0; i <= num; i++) {
    newNum = newNum + i;
  }
  return newNum;
};
console.log(sumNums());
