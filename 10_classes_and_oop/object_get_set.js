const User = {
    _email: 'pankha@fan.com',
    _password : '12345',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const fan = Object.create(User)
console.log(fan.email)