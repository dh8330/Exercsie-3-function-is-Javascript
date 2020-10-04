
//var array1 = [2,3];
//var array2 = [4.5];

 function sumOfArray(array2, array3) {
     var array4forsum = new Array ();
     if (array2.length == array3.length) {
         var numberoftimestoruntheloop = array2.length;
         for(counter = 0; counter<=1; counter++) {
            array4forsum[counter] = array2[counter] + array3[counter]; 
     } 
     } else {
         console.log('the length of the arrays your input was not equal please provide another input')
     }
     return array4;
     console.log(array4forsum); 

 }

