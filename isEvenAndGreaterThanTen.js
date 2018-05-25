//checks to see if a number is both even and greater than ten

function isEvenAndGreaterThanTen(num) {
  if (num > 10 && num%2 === 0){ //num > 10 checks to see if the number is greater than ten. num%2 === 0 checks to see if it is even (if you don't know what % does, then google it)
    return true; //returns true if it meets the requirements
  } else {
    return false; //returns false if it does not meet the requirements
  }
}
