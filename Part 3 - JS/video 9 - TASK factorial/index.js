let a = 10;

function factorial(num) {
  let arr = Array.from(Array(num + 1).keys());
  console.log(arr.slice(1));

  let c = arr.slice(1).reduce((a, b) => {
    return a * b;
  });

  return c;
}

function facFor(number) {
  let fac = 1;
  for (let index = 1; index <= number; index++) {
    fac *= index;
  }
  return fac;
}
console.log("with reduce " + factorial(a));
console.log("with for loop " + facFor(a));
