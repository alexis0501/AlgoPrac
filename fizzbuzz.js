/**
 * @param {number} i
 * @return {string[]}
 */

// for (let i = 0; i < 80; i++) {
//     if(i % 15 == 0)
//         console.log("Fizzbuzz");
//     else if (i % 5 == 0) 
//         console.log("Buzz");
//     else if (i % 3 == 0)
//         console.log("fizz");
//     else 
//         console.log(i);
// }


for (let i = 0; i < 55; i++) {
    if(i % 15 == 0)
        console.log("fizzbuzz");
    else if (i % 5 == 0)
        console.log("buzz");
    else if (i % 3 == 0)
        console.log("fizz");
    else
        console.log(i);
}