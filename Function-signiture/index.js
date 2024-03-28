//function signiture is a blueprint of a function
var myfunc;
myfunc = function (x, y) {
    return x + y;
};
// console.log(myfunc( 4, 2,))
var subs;
subs = function (a, b) {
    console.log("this is ".concat(a, " and ").concat(b));
};
var add;
add = function (a, b, c) {
    if (c === "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(add(2, 5, ""));
