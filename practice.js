// function squareDigits(num){

//     let array = (""+num).split("").map(num);


//     // const squareNumbers = [];
//     //  for(let int = 0; i < array.length; i += 1){
//     //     squareNumbers.push(Math.pow(array[i]));
//     //  }
//      console.log(array);
//     return 0;
//   }
// console.log(squareDigits(6756576));


function countSheeps(sheep) {
    const counter = 0;
     sheep.forEach(number => {
       if (number == 'true') {
         counter += 1;
       } else if (number == 'undefined') {
         counter += 0;
       } else if (number == 'null') {
         counter += 0;
       }
     })
    return counter;
  }


  
