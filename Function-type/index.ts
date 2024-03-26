let myFunc: Function;

myFunc = () => {
    console.log("hello world")
}

myFunc()

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
const printFunc = (a : String , b:Number, c: boolean= true) => {
    console.log(`i have toprint ${a} and ${b} ${c}`)
}

printFunc("hello", 10)

// ==> while function is not return default return type is void

// --> in this function will return type is nuber
const addition = (a: number , b : number) => {
     return a + b;
}

console.log(addition(2, 6))
