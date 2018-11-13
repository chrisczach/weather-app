const a = [1, 2, 3, 4, 5];

Array.prototype.multiply = function() {
  const multiplied = this.map(each => each * each);
  this.push(...multiplied);
};

a.multiply();

console.log(a);

const total = 0.1 + 0.2;
console.log(total);

const b = {
  key1: Symbol(),
  key2: 10
};

console.log(JSON.stringify(b));
