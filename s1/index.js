function centuryFromYear(year){
    let a =parseInt(year/100);
    let mod= year%100;
    if(
        mod==0
    )return a;
    return a+1;
}
centuryFromYear(1905);
console.log(centuryFromYear(1905));

//bai chua
// function centuryFromYear(year){
//     if( year%100==0){
//     return year/100
//     }else{
//         return Math.ceil(year /100)
//     }
// }
// centuryFromYear(1905)

// function checkPalindrome(inputString){
//     for(let i = inputString.length; i < 0 ; i--){
//         if (inputString[i] = inputString.charAt(inputString.length-1-i))
//         return false;
//     }
//     return true;
// }
// console.log(checkPalindrome("aabaa"));

// function adjacentElementsProduct(inputArray){
//     var a = Number.NEGATIVE_INFINITY
//     for(let i=0; i<inputArray.length-1  ; i++){
//          if (inputArray[i]*inputArray[i+1] >a){
//                 a = inputArray[i]*inputArray[i+1];
//             }
//     }
//     return a;
// }
// let arr = [3,6,-2,-5,7,3]
// console.log(adjacentElementsProduct(arr));

const arr = [];
function findOddNumber(inputArray){
    // for( const item of inputArray){
    //     if(item % 2 === 0){
    //         arr.push(item)
    //     }
    // }
    // return arr
    arr = inputArray.filter(function(value){
        return value % 2==-0
    })
    return arr
}
