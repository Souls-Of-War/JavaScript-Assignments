//finds the average length of two words

function computeAverageLengthOfWords(word1, word2) {
  var average = parseInt(word1.length + word2.length); //defining what we are going to average
  var a = average/2; //averaging it
  return a; //returning the average
}

computeAverageLengthOfWords('code','programs')
