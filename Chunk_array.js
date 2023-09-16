/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let s = []
    for(i=0; i<arr.length; i+=size) {
        s.push(arr.slice(i, i+size))
    }
    return s;
};