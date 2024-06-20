class User {
    constructor(username){
        this.username = username
    }

    LogMe(){
        console.log(`Username is : ${this.username}.`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email,
        this.password = password
    }

    AddCourse(){
        console.log(`A new course was added by ${this.username}.`)
    }
}

let teacher = new Teacher('master ji', 'masterji@pathshala.com', '123')

teacher.AddCourse()

let tea = new User('masala chai')
tea.LogMe()

console.log(teacher instanceof Teacher)
console.log(teacher instanceof User)