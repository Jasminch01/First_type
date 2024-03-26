var printUser = function (user, id) {
    console.log(id, user);
};
var user = { name: "John", age: 30 };
var id = 123;
var product = function (id, details) {
    console.log(" product id ".concat(id, " name : ").concat(details.name, " its type is ").concat(details.type, " and its ").concat(details.isOk));
};
product(1001, { name: "cap", type: "good", isOk: true });
