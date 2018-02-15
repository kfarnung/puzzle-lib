const input = `
this._addMapping('.-', 'A');
this._addMapping('-...', 'B');
this._addMapping('-.-.', 'C');
this._addMapping('-..', 'D');
this._addMapping('.', 'E');
this._addMapping('..-.', 'F');
this._addMapping('--.', 'G');
this._addMapping('....', 'H');
this._addMapping('..', 'I');
this._addMapping('.---', 'J');
this._addMapping('-.-', 'K');
this._addMapping('.-..', 'L');
this._addMapping('--', 'M');
this._addMapping('-.', 'N');
this._addMapping('---', 'O');
this._addMapping('.--.', 'P');
this._addMapping('--.-', 'Q');
this._addMapping('.-.', 'R');
this._addMapping('...', 'S');
this._addMapping('-', 'T');
this._addMapping('..-', 'U');
this._addMapping('...-', 'V');
this._addMapping('.--', 'W');
this._addMapping('-..-', 'X');
this._addMapping('-.--', 'Y');
this._addMapping('--..', 'Z');
this._addMapping('-----', '0');
this._addMapping('.----', '1');
this._addMapping('..---', '2');
this._addMapping('...--', '3');
this._addMapping('....-', '4');
this._addMapping('.....', '5');
this._addMapping('-....', '6');
this._addMapping('--...', '7');
this._addMapping('---..', '8');
this._addMapping('----.', '9');
this._addMapping('.-.-', 'Ä');
this._addMapping('.--.-', 'Á');
this._addMapping('----', 'CH');
this._addMapping('..-..', 'É');
this._addMapping('--.--', 'Ñ');
this._addMapping('---.', 'Ö');
this._addMapping('..--', 'Ü');
this._addMapping('.-.-.-', '.');
this._addMapping('--..--', ',');
this._addMapping('..--..', '?');
this._addMapping('.----.', '\\'');
this._addMapping('-.-.--', '!');
this._addMapping('-..-.', '/');
this._addMapping('-.--.', '(');
this._addMapping('-.--.-', ')');
this._addMapping('.-...', '&');
this._addMapping('---...', ':');
this._addMapping('-.-.-.', ';');
this._addMapping('-...-', '=');
this._addMapping('.-.-.', '+');
this._addMapping('-....-', '-');
this._addMapping('..--.-', '_');
this._addMapping('.-..-.', '"');
this._addMapping('...-..-', '$');
this._addMapping('.--.-.', '@');
`;

function padValue (value, width) {
  let pad = 0;
  if (value.length <= width) {
    pad = width - value.length;
  }

  return '0'.repeat(pad) + value;
}

function translate (morse) {
  let bits = 0;

  for (let i = morse.length - 1; i >= 0; i--) {
    const ch = morse[i];
    if (ch === '.') {
      bits |= 0b01;
    } else if (ch === '-') {
      bits |= 0b10;
    } else {
      throw new Error('Invalid morse character');
    }

    bits <<= 2;
  }

  bits >>>= 2;
  return `0x${padValue(bits.toString(16).toUpperCase(), 4)}`;
}

console.log(input.replace(/_addMapping\('([.-]+)',/gm, (match, p1) => {
  return `data.set(${translate(p1)},`;
}));
