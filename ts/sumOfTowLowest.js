// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
function lowestTow(arr) {
    var minimum = 0;
    var minimumArray = arr.sort(function (a, b) { return a - b; });
    return minimumArray[0] + minimumArray[1];
}
