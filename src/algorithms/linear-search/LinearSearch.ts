/**
 * Linear search implementation.
 * Return the index of the target if exists in the list. Else, return -1.
 *
 * @param {<T>[]} array
 * @param {T} target
 * @return {number}
 */

export default function linearSearch(arr: number[], target: number): number {
  const length = arr.length;

  for (let i = 0; i < length; ++i) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
