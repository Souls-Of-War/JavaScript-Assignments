//Given a number, "computeSummationToN" returns the sum of sequential numbers leading up to the given number, beginning at 0

function computeSummationToN(n) {
  a= []; //defines an array
  total = 0; //defines a variable
  for (i = 0; i < n+1; i++){ //a normal for loop
    a.push(i); //moves i into the array of a
    total+=a[i]; //add a (the location of i) to the varriable total
    }
  return total; //returns the varriable total
}
