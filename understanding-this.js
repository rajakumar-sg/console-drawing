function ThisObject() {
  console.log('First', this);

  const obj1 = {
    f1: function printValue(source) {
      console.log("f1", this);
    },

    f2: () => {
      console.log("f2", this);
    },

    obj1: "obj1",
  };

  const obj2 = {
    f3: (f) => {
      console.log("f3", this);
      f();
    },

    f4: function (f) {
      console.log("f4", this);
      f();
    },
  };

  obj1.f1();
  //obj1.f2();

  //obj2.f3(obj1.f1);
  //obj2.f3(obj1.f2);

  obj2.f4(obj1.f1);
  //obj2.f4(obj1.f2);
}

new ThisObject();