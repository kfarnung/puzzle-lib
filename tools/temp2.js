const BrailleDot = Object.freeze({
  None: 0x0,
  UpperLeft: 0x1,
  MiddleLeft: 0x2,
  LowerLeft: 0x4,
  UpperRight: 0x8,
  MiddleRight: 0x10,
  LowerRight: 0x20
});

const row = [
  // Numeric sequence
  BrailleDot.UpperLeft,
  BrailleDot.UpperLeft | BrailleDot.MiddleLeft,
  BrailleDot.UpperLeft | BrailleDot.UpperRight,
  BrailleDot.UpperLeft | BrailleDot.UpperRight | BrailleDot.MiddleRight,
  BrailleDot.UpperLeft | BrailleDot.MiddleRight,
  BrailleDot.UpperLeft | BrailleDot.MiddleLeft | BrailleDot.UpperRight,
  BrailleDot.UpperLeft | BrailleDot.MiddleLeft | BrailleDot.UpperRight | BrailleDot.MiddleRight,
  BrailleDot.UpperLeft | BrailleDot.MiddleLeft | BrailleDot.MiddleRight,
  BrailleDot.MiddleLeft | BrailleDot.UpperRight,
  BrailleDot.MiddleLeft | BrailleDot.UpperRight | BrailleDot.MiddleRight,

  // Shift right
  BrailleDot.UpperRight,
  BrailleDot.UpperRight | BrailleDot.UpperLeft
];

const decades = [
  BrailleDot.None,
  BrailleDot.LowerLeft,
  BrailleDot.LowerLeft | BrailleDot.LowerRight,
  BrailleDot.LowerRight
];

function shiftDown (braille) {
  const mask = (1 << 3) - 1;
  let firstHalf = braille & mask;
  firstHalf <<= 1;
  firstHalf &= mask;

  braille >>>= 3;
  let secondHalf = braille & mask;
  secondHalf <<= 1;
  secondHalf &= mask;
  secondHalf <<= 3;

  return firstHalf | secondHalf;
}

function padLeft (value, width) {
  let pad = 0;
  if (value.length < width) {
    pad = width - value.length;
  }

  return '0'.repeat(pad) + value;
}

function getHex (num) {
  return `0x${padLeft(num.toString(16).toUpperCase(), 2)}`;
}

console.log('const BrailleEncoding = Object.freeze({');
console.log('  None: 0x0,');

for (let i = 0; i < decades.length; i++) {
  for (let j = 0; j < row.length; j++) {
    console.log(`  Decade${i}Column${j}: ${getHex(decades[i] | row[j])},`);
  }
}

for (let j = 0; j < row.length; j++) {
  console.log(`  Decade4Column${j}: ${getHex(shiftDown(row[j]))},`);
}

console.log('});');
