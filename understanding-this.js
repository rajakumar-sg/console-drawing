function One() {
  this.value = "one";
  this.two = new Two();
  this.print = () => {
    console.log(this.value);
    this.two.print(this.nestedPrint);
  };

  this.nestedPrint = () => {
    console.log('Nested print: ' + this.value);
  }
}

function Two() {
  this.value = "two";
  this.print = (p) => {
    console.log(this.value);
    p();
  }
}

const one = new One();
one.print();
