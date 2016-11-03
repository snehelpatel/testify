function fizz (number) {
  if (number % 15 === 0){
    return "fizzbuzz";
  } else if (number % 3 === 0) {
      return "fizz";
    } else if (number % 5 === 0) {
      return "buzz";
    } else {
      return number;
    }
};

function fizzBuzz (start, end) {
  for (var i = start ; i <= end; i++ ) {
    var results = fizz(i)
    console.log(fizz(i))
  }
};
(fizzBuzz(1, 89))





export { fizz };
