function zipStrings(strA, strB) {

  let arrA = strA.split("").filter(Boolean);
  let arrB = strB.split("");

  let zipResult = '';


  for(var i = 0; i < arrA.length || i < arrB.length; i++) {  //loop condition checks if i is less than a.length or b.length
   if(i < arrA.length)  //if i is less than a.length add a[i] to string first.
     zipResult +=  arrA[i];
   if(i < arrB.length)  //if i is less than b.length add b[i] to string.
     zipResult +=  arrB[i];
  }
return zipResult;

}
