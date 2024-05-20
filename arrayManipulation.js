// Task 1
function processArray(numbers) {
    return numbers.map(number => {
      if (number % 2 === 0) {
        return number ** 2;
      } else {
        return number * 3;
      }
    });
  }
  
  // Task 2
  function formatArrayStrings(stringArray, numberArray) {
    return stringArray.map((string, index) => {
      if (numberArray[index] % 2 === 0) {
        return string.toUpperCase();
      } else {
        return string.toLowerCase();
      }
    });
  }
  
  export { processArray, formatArrayStrings };
  