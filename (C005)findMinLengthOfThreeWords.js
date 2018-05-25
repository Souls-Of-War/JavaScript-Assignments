//checks for the smallest worrd

function findMinLengthOfThreeWords(word1, word2, word3) {
  a = word1.length; //checks the length of word1
  b = word2.length; //checks the length of word2
  c = word3.length; //checks the length of word3
  if (a < b && a < c){ //checks to see if word1 is the smallest word
    return a; //if it is, then this returns it
  } else if (b < a && b < c){ //checks to see if word2 is the smallest word
    return b; //if it is, then this returns it
  } else if (c < a && c < a){ //checks to see if word3 is the smallest word
    return c; //if it is, then this returns it
  }
}
