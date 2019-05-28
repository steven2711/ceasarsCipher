function rot13(string) {
  const alphabet = [
    " ",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "!",
    "?",
    "."
  ];

  const codedAlphabet = [
    " ",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "!",
    "?",
    "."
  ];

  let decodedCipher = [];

  let splitString = string.toUpperCase().split("");

  splitString.forEach(codeLetter => {
    for (let i = 0; i < alphabet.length; i++) {
      if (codeLetter === alphabet[i]) {
        decodedCipher.push(codedAlphabet[i]);
      }
    }
  });

  return decodedCipher.join("");
}

let exampleString = "LBH QVQ VG!";

console.log(rot13(exampleString));
