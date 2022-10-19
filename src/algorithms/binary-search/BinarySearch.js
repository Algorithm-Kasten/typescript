"use strict";
/**
 * Binary search implementation.
 *
 * @param {*[]} sortedArray
 * @param {*} seekElement
 * @return {number}
 */
exports.__esModule = true;
function binarySearch(sortedList, target) {
    var low = 0;
    var high = sortedList.length - 1;
    while (low <= high) {
        var mid = low + ((high - low) >> 1);
        if (sortedList[mid] === target) {
            return mid;
        }
        else if (sortedList[mid] <= target) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return -1;
}
exports["default"] = binarySearch;
console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5], 1));
console.log(binarySearch([1, 2, 3, 4, 5], 9));
