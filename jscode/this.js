name = 'a';

let obj = {
  name: 'obj',
  f1() {
    console.log('this f1', this.name);

    const f2 = () => {
      console.log('this f2', this.name);

      function f3() {
        console.log('this f3', this.name);
      }

      f3();
    };

    f2();
  },
};

obj.f1();
