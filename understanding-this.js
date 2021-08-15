class One {
  constructor() {
    this.value = "One";
  }

  print() {
    printValue('One');
  }
}

class Two {
  constructor() {
    this.value = "Two";
  }

  print() {
    printValue('Two');
  }
}

function printValue(source) {
  console.log('Call from ' + source + ' - ' + this.value);
}

const one = new One();
const two = new Two();
one.print();
two.print();
