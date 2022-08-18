/* 
  Given an array, remove and
  return the value at the beginning of the array and then shift the remaining items down to fill the empty space.
  Do this without using any built-in array methods except pop().
*/

const arr1 = [1, 2, 3];
const expected1 = 1;
// after running function arr1 should now be:
const expectedArr1 = [2, 3];

const arr2 = ["a", "b", "c", "d","e"];
const expected2 = "a";
// after running function arr2 should now be:
const expectedArr2 = ["b", "c", "d"];

const arr3 = [];
const expected3 = undefined;
const expectedArr3 = [];

function shift(items = []) {
    const first = items[0]
    if(items.length < 0){
        for (let i = 1; i < items.length; i++) {
            items[i - 1] = items[i];
        }
        items.length  = items.length - 1
    }
    return first;
    
}

