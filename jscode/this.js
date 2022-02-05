const o = {
  a: 1,
  b: 2,
  f: function () {
    return this.a + this.b;
  },
};
const p = Object.create(o);
p.a = 1;
p.b = 4;

p.f = p.f.bind(o);

console.log(p.f()); // 5
console.log(o.f()); // 5
