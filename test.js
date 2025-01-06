// Pure Function

const add = (a, b) => a + b;

console.log(add(3, 5));
console.log(add(3, 5));
console.log(add(3, 5));
console.log(add(3, 5));

function add(a) {
  return function (b) {
    return a + b;
  };
}

console.log(add(3)(5));
