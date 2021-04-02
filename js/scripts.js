//Business Logic
function convertToRoman(userNumber) {

  if (userNumber === 0) {
    return "nulla";

  } else if ((userNumber > 0)&&(userNumber < 4000)&&(Number.isInteger(userNumber))) {
   
  const digitArray = userNumber.toString().split('');  

  const onesPlace = ['I','II','I','IV','V','VI','VII','VIII','IX'];
  const tensPlace = ['X','XX','XXX','XL','L','LX','LXX','LXXX','XC'];
  const hunsPlace = ['C','CC','CCC','CD','D','DC','DCC','DCCC','CM'];
  const thosPlace = ['M','MM','MMM']

  const romNumFourth = onesPlace[digitArray[numDigits-1]-1];
  const romNumThird = tensPlace[digitArray[numDigits-2]-1];
  const romNumSecond = hunsPlace[digitArray[numDigits-3]-1];
  const romNumFirst = thosPlace[digitArray[numDigits-4]-1];

  return([romNumFirst,romNumSecond,romNumThird,romNumFourth]).join('');

  } else {
    return "Invalid input.  Enter a number between 0 and 3,999."  
    }
  }

