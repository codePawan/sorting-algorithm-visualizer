export function changeArrayHelper(
  setIsSorted,
  array,
  setCopiedArray,
  setSameArray,
  setArray,
  setWidth,
  setSpeed,
  size,
  randomNoGenerator
) {
  setIsSorted(false);
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(randomNoGenerator(5, 630));
  }
  setArray(arr);
  setCopiedArray([...arr]);
  setSameArray([...arr]);
  setWidth(1000 / arr.length);
  const arrayBars = document.getElementsByClassName("array-bar");
  console.log(arrayBars)
  for (let i = 0; i < array.length; i++) {    
    arrayBars[i].style.backgroundColor = "blue";
  }
  setSpeed((2 * 500) / size);
  return arr;
}
