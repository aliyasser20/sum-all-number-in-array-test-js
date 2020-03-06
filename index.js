const sumItems = function(array) {
  let result = 0;

  array.forEach(el => {
    if (Array.isArray(el)) {
      result += sumItems(el);
    } else {
      result += el;
    }
  });
  
  return result;
};

const numbersArray = [[1, 2, [[3], 4]], 5, []];
const numbersArray2 = [[[[[[[[[[[[[1]]]]]]]]]]]]];

console.log(sumItems(numbersArray));
console.log(sumItems(numbersArray2));

module.exports = sumItems;