let a = function (obj) {
  console.log(obj);
};

a(1);
let b = [1, 2, 3].reduce(function (total, cur) {
  return total + cur;
}, 0);
console.log(b);

for (let Obj of [1, 2, 3]) {
  console.log(Obj);
}