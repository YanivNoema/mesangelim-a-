export const flatten = arr => {
    var out = [];
    for (var i = 0; i < arr.length; i++) {
        out.push.apply(out, Array.isArray(arr[i]) ? flatten(arr[i]) : [arr[i]]);
    }
    return out;
};
