//function signiture is a blueprint of a function
let myfunc : (x: number , y: number) => number;

myfunc = (x: number, y:number ) => {
     return x+y;
}

// console.log(myfunc( 4, 2,))

let subs : (a: string | number , b : string | number) => void;

subs = (a: string | number , b : string | number) => {
    console.log(`this is ${a} and ${b}`)
}

let add : (a: number, b:number, c: string) => number;

add = (a, b, c) => {
    if (c === "add") {
        return a + b
    }else{
        return a-b;
    }
}

console.log(add(2, 5, ""))


