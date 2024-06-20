class User {
    
    constructor(username){
        this.username = username
    }

    LogMe(){
        console.log(`Username is: ${this.username}.`)
    }

    static CreateUniqueId(){
        return `123`
    }
}

const newUser = new User("vishard")

//console.log(newUser.CreateUniqueId())

class Teacher extends User{

    constructor(username, email){
        super(username)
        this.email = email
    }
}

const samsung = new Teacher('samsung', 'sam@sung.com')
samsung.LogMe()