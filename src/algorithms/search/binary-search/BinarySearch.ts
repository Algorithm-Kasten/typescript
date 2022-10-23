/**
 * Binary search implementation.
 *
 * @param {*[]} sortedArray
 * @param {*} seekElement
 * @return {number}
 */

export default function binarySearch(
  sortedList: number[],
  target: number
): number {
  let low = 0;
  let high = sortedList.length - 1;

  while (low <= high) {
    let mid = low + ((high - low) >> 1);

    if (sortedList[mid] === target) {
      return mid;
    } else if (sortedList[mid] <= target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}
