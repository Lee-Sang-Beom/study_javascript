function C() {
  return 1;
}

function B() {
  const one = C();
  return one;
}

function A() {
  const result = B();
  console.log(result);
}

A();
