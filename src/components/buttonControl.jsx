import React from "react";

export default function ButtonControl({
  changeArraySize,
  resetArray,
  insertionSort,
  quickSort,
  mergeSort,
  heapSort,
  bubbleSort,
  size,
  isPlaying,
  isSorted
}) {
  return (
    <div className="button-container">
      <div>
        <a href="/" className="btn stop m-1">
          Stop (Refresh)
        </a>
      </div>
      <button
        className={`btn m-1 ${isSorted ? "btn-sec" : "btn-light"}`}
        onClick={resetArray}
        disabled={isPlaying || (!isSorted && !isPlaying)}
      >
        Reset to Same Array
      </button>
      <button
        className={`btn m-1 ${
          isPlaying || isSorted ? "btn-light" : "btn-dark"
        }`}
        onClick={insertionSort}
        disabled={isPlaying || isSorted}
      >
        Insertion Sort
      </button>
       {/* quickSort */}
      <button
        className={`btn m-1 ${
          isPlaying || isSorted ? "btn-light" : "btn-success"
        }`}
        onClick={quickSort}
        disabled={isPlaying || isSorted}
      >
        Quick Sort
      </button>
      <button
        className={`btn m-1 ${
          isPlaying || isSorted ? "btn-light" : "btn-warning"
        }`}
        onClick={mergeSort}
        disabled={isPlaying || isSorted}
      >
        Merge Sort
      </button>
      <button
        className={`btn m-1 ${
          isPlaying || isSorted ? "btn-light" : "btn-primary"
        }`}
        onClick={heapSort}
        disabled={isPlaying || isSorted}
      >
        Heap Sort
      </button>
      <button
        className={`btn m-1 ${
          isPlaying || isSorted ? "btn-light" : "btn-info"
        }`}
        onClick={bubbleSort}
        disabled={isPlaying || isSorted}
      >
        Bubble Sort
      </button>
      <div className=" ms-4">
        <label for="shade" className="form-label ml-1 mt-1">
          Size {size}
        </label>
        <input
          type="range"
          id="shade"
          name="shade"
          min="10"
          max="400"
          className="form-range ms-3"
          onChange={changeArraySize}
          disabled={isPlaying}
        />
      </div>
    </div>
  );
}
