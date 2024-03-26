var myFunc;
myFunc = function () {
    console.log("hello world");
};
myFunc();
// ==> parameter type : the parameters a and b is required
// const printFunc = (a : String , b:Number) => {
//     console.log(`i have toprint ${a} and ${b}`)
// }
// printFunc("hello", 10)
// ==> declear optional type of parameter : incidate parameter c is optional {not required}
// const printFunc = (a : String , b:Number, c?: boolean) => {
//     console.log(`i have toprint ${a} and ${b}`)
// }
// printFunc("hello", 10)
// ---> default type of function parameters : in this function parameter c
// --> is default type which is boolean and default it's true
var printFunc = function (a, b, c) {
    if (c === void 0) { c = true; }
    console.log("i have toprint ".concat(a, " and ").concat(b, " ").concat(c));
};
printFunc("hello", 10);
