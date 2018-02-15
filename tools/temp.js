const BrailleDot = Object.freeze({
  None: 0x0,
  UpperLeft: 0x1,
  MiddleLeft: 0x2,
  LowerLeft: 0x4,
  UpperRight: 0x8,
  MiddleRight: 0x10,
  LowerRight: 0x20
});

const BrailleEncoding = Object.freeze({
  None: 0x0,

  // Letters (first decade)
  LetterA: BrailleDot.UpperLeft,
  LetterB: BrailleDot.UpperLeft | BrailleDot.MiddleLeft,
  LetterC: BrailleDot.UpperLeft | BrailleDot.UpperRight,
  LetterD: BrailleDot.UpperLeft | BrailleDot.UpperRight | BrailleDot.MiddleRight,
  LetterE: BrailleDot.UpperLeft | BrailleDot.MiddleRight,
  LetterF: BrailleDot.UpperLeft | BrailleDot.MiddleLeft | BrailleDot.UpperRight,
  LetterG: BrailleDot.UpperLeft | BrailleDot.MiddleLeft | BrailleDot.UpperRight | BrailleDot.MiddleRight,
  LetterH: BrailleDot.UpperLeft | BrailleDot.MiddleLeft | BrailleDot.MiddleRight,
  LetterI: BrailleDot.MiddleLeft | BrailleDot.UpperRight,
  LetterJ: BrailleDot.MiddleLeft | BrailleDot.UpperRight | BrailleDot.MiddleRight,

  // Letters (second decade)
  LetterK: BrailleDot.LowerLeft | BrailleDot.UpperLeft,
  LetterL: BrailleDot.LowerLeft | BrailleDot.UpperLeft | BrailleDot.MiddleLeft,
  LetterM: BrailleDot.LowerLeft | BrailleDot.UpperLeft | BrailleDot.UpperRight,
  LetterN: BrailleDot.LowerLeft | BrailleDot.UpperLeft | BrailleDot.UpperRight | BrailleDot.MiddleRight,
  LetterO: BrailleDot.LowerLeft | BrailleDot.UpperLeft | BrailleDot.MiddleRight,
  LetterP: BrailleDot.LowerLeft | BrailleDot.UpperLeft | BrailleDot.MiddleLeft | BrailleDot.UpperRight,
  LetterQ: BrailleDot.LowerLeft | BrailleDot.UpperLeft | BrailleDot.MiddleLeft | BrailleDot.UpperRight | BrailleDot.MiddleRight,
  LetterR: BrailleDot.LowerLeft | BrailleDot.UpperLeft | BrailleDot.MiddleLeft | BrailleDot.MiddleRight,
  LetterS: BrailleDot.LowerLeft | BrailleDot.MiddleLeft | BrailleDot.UpperRight,
  LetterT: BrailleDot.LowerLeft | BrailleDot.MiddleLeft | BrailleDot.UpperRight | BrailleDot.MiddleRight,

  // Letters (third decade)
  LetterU: BrailleDot.LowerLeft | BrailleDot.LowerRight | BrailleDot.UpperLeft,
  LetterV: BrailleDot.LowerLeft | BrailleDot.LowerRight | BrailleDot.UpperLeft | BrailleDot.MiddleLeft,
  LetterX: BrailleDot.LowerLeft | BrailleDot.LowerRight | BrailleDot.UpperLeft | BrailleDot.UpperRight,
  LetterY: BrailleDot.LowerLeft | BrailleDot.LowerRight | BrailleDot.UpperLeft | BrailleDot.UpperRight | BrailleDot.MiddleRight,
  LetterZ: BrailleDot.LowerLeft | BrailleDot.LowerRight | BrailleDot.UpperLeft | BrailleDot.MiddleRight,

  // Letters (fourth decade)
  LetterW: BrailleDot.LowerRight | BrailleDot.MiddleLeft | BrailleDot.UpperRight | BrailleDot.MiddleRight,

  // Numbers (first decade)
  Number1: BrailleDot.UpperLeft,
  Number2: BrailleDot.UpperLeft | BrailleDot.MiddleLeft,
  Number3: BrailleDot.UpperLeft | BrailleDot.UpperRight,
  Number4: BrailleDot.UpperLeft | BrailleDot.UpperRight | BrailleDot.MiddleRight,
  Number5: BrailleDot.UpperLeft | BrailleDot.MiddleRight,
  Number6: BrailleDot.UpperLeft | BrailleDot.MiddleLeft | BrailleDot.UpperRight,
  Number7: BrailleDot.UpperLeft | BrailleDot.MiddleLeft | BrailleDot.UpperRight | BrailleDot.MiddleRight,
  Number8: BrailleDot.UpperLeft | BrailleDot.MiddleLeft | BrailleDot.MiddleRight,
  Number9: BrailleDot.MiddleLeft | BrailleDot.UpperRight,
  Number0: BrailleDot.MiddleLeft | BrailleDot.UpperRight | BrailleDot.MiddleRight,

  // Formatting
  FormattingNumber: BrailleDot.LowerLeft | BrailleDot.UpperRight | BrailleDot.MiddleRight | BrailleDot.LowerRight,
  FormattingCapital: BrailleDot.LowerRight,

  // Punctuation
  PunctuationComma: BrailleDot.MiddleLeft,
  PunctuationSemicolon: BrailleDot.MiddleLeft | BrailleDot.LowerLeft,
  PunctuationApostrophe: BrailleDot.LowerLeft,
  PunctuationColon: BrailleDot.MiddleLeft | BrailleDot.MiddleRight,
  PunctuationHyphen: BrailleDot.LowerLeft | BrailleDot.LowerRight,
  PunctuationDecimalPoint: BrailleDot.UpperRight | BrailleDot.LowerRight,
  PunctuationFullStop: BrailleDot.MiddleLeft | BrailleDot.MiddleRight | BrailleDot.LowerRight,
  PunctuationExclamationPoint: BrailleDot.MiddleLeft | BrailleDot.LowerLeft | BrailleDot.MiddleRight,
  PunctuationOpenQuote: BrailleDot.MiddleLeft | BrailleDot.LowerLeft | BrailleDot.LowerRight,
  PunctuationQuestionMark: BrailleDot.MiddleLeft | BrailleDot.LowerLeft | BrailleDot.LowerRight,
  PunctuationCloseQuote: BrailleDot.LowerLeft | BrailleDot.MiddleRight | BrailleDot.LowerRight,
  PunctuationBracket: BrailleDot.MiddleLeft | BrailleDot.LowerLeft | BrailleDot.MiddleRight | BrailleDot.LowerRight,
  PunctuationSlash: BrailleDot.LowerLeft | BrailleDot.UpperRight
});

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

for (const key of Object.getOwnPropertyNames(BrailleEncoding)) {
  console.log(`${key}: ${getHex(BrailleEncoding[key])},`);
}
