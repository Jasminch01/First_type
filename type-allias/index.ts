

const printUser = (user : {name : string, age : number}, id : number ) => {
    console.log(id, user)
}

const user = { name: "John", age: 30 };
const id = 123;


// const userPrint = printUser(user, id)

// console.log(userPrint)

// ==> type allias
type idType = number | string
type detailsType = {name : string, type : string, isOk : boolean};


const product = (id: idType, details : detailsType) => {

    console.log(` product id ${id} name : ${details.name} its type is ${details.type} and its ${details.isOk}`)
}

product(1001, {name : "cap",  type : "good", isOk: true})

