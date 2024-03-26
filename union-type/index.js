"use strict";
//tsc config file command tsc --init
let userName;
userName = "user1";
userName = 123;
userName = false;
function printUser(user) {
    console.log(user);
}
printUser("batman");
//array unior type
let a = [];
a.push("jasmin", 12);
// a.push({name : "jasmin",}) //it's got error because a array only number or string array
//object uinor type
let obj;
obj = {
    name: "jasmin"
};
obj = []; //it will support because an array type is object
//explecit object type declearation : 
let obj1;
//obj1 valid type
obj1 = {
    name: 10,
    age: "10"
};
//invalid type of object because obj1 object name type is number and age type is string
// obj1 = {
//     name : "jasmin"
//     age : 10
// }
