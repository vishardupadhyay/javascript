class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(email){
        this._email = email.toUpperCase()
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(password){
        this._password = password
    }
}

const vishard = new User('vishard@room.com', '123')

console.log(vishard.password)
console.log(vishard.email)