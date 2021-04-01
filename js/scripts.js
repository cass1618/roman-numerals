//Utility Logic

const symbols = ["I", "V", "X", "L", "C", "D", "M"]

function isItARomanNumeral(romanNumeral) {
  if (symbols.includes(romanNumeral)) {
return true;
  } else {
return false;
  }
  }


  // Business Logic

  // input: string
  // return: number

  // string -> array of characters

  function translateToRoman(letterString) {
    if (isItARomanNumeral(letterString) === true) {
     
    const letterArray =letterString.split('');
    letterArray.map(function (letter)) {
      if (letter==='I') {
        return 1;
      } else if (letter ==='V') {
        return 5;
      } 
    }

    // ['X','X','C']
    // ['10','10','100']
    

    }

  else {
    return "Invalid input";
  }

  }





