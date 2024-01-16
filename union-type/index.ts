let userName: (string | boolean | number)

userName = "user1"
userName = 123
userName = false


function printUser (user: number | string){
    console.log(user)
}

printUser("batman")