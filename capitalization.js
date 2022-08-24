/* Tests for capitalize function */
const string1 = "hello";
const expected1 = "Hello";

const string2 = "";
const expected2 = "";

/**
 * Capitalizes the first letter of the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} string The string to capitalize.
 * @returns {string} The given string with the first letter capitalized or an
 *    empty string.
 */

function capitalize(string) {
    if(string === 0){
        return ""
    }
    return string[0].toUpperCase() + string.slice(1)
}
console.log(capitalize(string1));


/* Tests for capitalization function */
const strings1 = ["hello", "world"];
const expectedStrings1 = ["Hello", "World"];

/**
 * Capitalizes the first letter of each string in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} strings
 * @returns {Array<string>} The same given array with updated items.
 */

function capitalization(strings){
    for(let i = 0; i < strings.length; i++){
        strings[i] = capitalize(strings[i])
    }
    return strings
}
console.log(capitalization(strings1));