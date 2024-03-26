//tsc config file command tsc --init
let userName: (string | boolean | number)

userName = "user1"
userName = 123
userName = false


function printUser (user: number | string){
    console.log(user)
}

printUser("batman")

//array unior type
let a : (number | string)[] = [];

a.push("jasmin", 12);
// a.push({name : "jasmin",}) //it's got error because a array only number or string array
