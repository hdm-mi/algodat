var __spreadArray = this && this.__spreadArray || function (a, b) {
    for (var c = 0, e = b.length, d = a.length; c < e; c++, d++) {
        a[d] = b[c];
    }
    return a;
}, ARRAY = [3, 6, 3, 6, 1, 7, 4];
function merge(a, b) {
    for (var c = []; a.length && b.length;) {
        a[0] < b[0] ? c.push(a.shift()) : c.push(b.shift());
    }
    return __spreadArray(__spreadArray(__spreadArray([], c), a), b);
}
function mergeSort(a) {
    if (2 > a.length) {
        return a;
    }
    var b = a.splice(0, a.length / 2);
    return merge(mergeSort(b), mergeSort(a));
}
console.log(mergeSort(ARRAY));