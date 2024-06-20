function SetUserName(givenUserName){

    // DB calls , validating if given user name is available of not.
    this.username = givenUserName
}

function CreateUser(userName, email, password){
    SetUserName.call(this, userName),
    this.email = email,
    this.password = password
}

const user = new CreateUser("chai", "chai@facebook.com", "123")

console.log(user)

/*
    call is used to pass the current execution context.

    Why it is helpful?
    Because in current example, SetUserName is a function being called to validate the user name and
    set in the CreateUser object. But, when the program starts and the function context is created
    and the SetUserName is called, it will set the username without any issue
    But,
    when it goes back to the caller function which is CreateUser, it will lost it's functional context
    and will loose the username too (generally all the properties it has) 
    So
    call method is used to hold the context of the SetUserName function so that it should not lose it's context
    untill the job is done.

    Again this is being passed as 1st parameter to call function because once it is called the username will be remove
    so we are passing the caller function's context to tell the target function that do not use your this context
    use caller's.
*/