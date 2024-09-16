// let fizzBuzz = () => {
//     for (let i = 1; i <= 100; i++){
//         if (i %3 === 0 && i %5 === 0) {
//             console.log("fuzzBuzz")
//         }
//         else if (i %3 === 0){
//             console.log("fizz")
//         }
//         else if (i %5 === 0){
//             console.log("buzz"); 
//         }
//         else {
//             console.log(i);
//         }
//     }
// }
// console.log(fizzBuzz())


// let arr = [1, 2, 2, 3, 4, 5, 6]
// let arr2 = arr.slice().sort()
// console.log(arr2.length)


// console.log([1, 2, 2, 3, 4, 4].filter((e, i ,a) => a.indexOf(e) !== i));


// let temp = (temprature,scale) => {
//     let result;
//      if ( scale === "C"){
//         result =(temprature * 9/5) + 32 
//         console.log(`Fahrenheit = ${result.toFixed(2)} F`)
//      }
//      if (scale ==="F") {
//         result = (fahrenheit - 32) * 5/9
//         console.log(`Celsuis = ${result} C`)
//      }

// } 

// console.log(temp(90,"C"))



// let vowels = (words) => {
//     const vowel = "aeiouAEIOU"
//     let count=0;
//     for (let element of words) {
//         if (vowel.includes(element)){
//             count++
           
//         }
        
//     }
// return count;
// }

// console.log(vowels("sahil"));

// let str = "sahil pawar dilip";
// console.log(str.split(' '))


// let longestWord = (sentence) => {
//     let sentence2 = sentence.split(' ')
//     // console.log(sentence2)
//     let longStr= "";
//     // console.log(longStr.length)
//     sentence2.forEach((element) => {
//         if ( element.length > longStr.length){
//             longStr = element;
//         }  
//     });
//     return {LOGESTSTR : longStr}
// }
// console.log(longestWord("sahil pawarww"))

// let reverseStr = (word) => {
//     let reversed = word.split('').reverse().join("")
//     return reversed;
// }
// console.log(reverseStr("sahil"))

// let countChr = (str,char) => {
//     let count = 0;
//     for ( element of str) {
//         if (element === char){
//             count++
//         }
//     }
//     return count;

// }
// console.log(countChr('SAHLII', 'I'))

// let sumArr = (arr) => {
//     let result = 0;
//     arr.forEach(element => {
//         result += element;

//     });
    
//     return result;
// }

// console.log(sumArr([1, 2, 3, 4, 5, 6]))

// let average = (arr) =>{
//     let total = 0;
//     let average;
//     arr.forEach(element => {
//         //average = total/arr.length;
        
//     });
//     return total/arr.length; // feasible approach
// }
// console.log(average([1, 2, 3, 4, 5, 6, 7]))

// let secondLargest = (arr) =>{
//     let first = -Infinity;
//     let second = -Infinity;
//     arr.forEach(element => {
//         if (element > first){
//             second = first;
//             first = element; 
//         }
//     });
//     return second;
// }
// console.log(secondLargest([1, 2, 3, 4]))


// let countChar = (str) => {
//     let count = {}
//     for (element of str) {
//         if (count[element]) {
//             count[element] += 1
//         }else{
//             count[element] = 1;
//         }
//     }
//     return count;
// }

// console.log(countChar('sahil '))



const sail = (a, b, c, ...sahil) =>{
    console.log(sahil)
    return a + b + c;
}
console.log(sail(2, 3, 4, 5, 6, 7))