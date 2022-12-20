function checkLoginData(username, password, dbUsername, dbPassword){
    if(username !== dbUsername){
        return false;
    }
    if(password !== dbPassword.split('').reverse().join('')){
        return false;
    }

    return true;
}

console.log(checkLoginData('stefan','12345678','stefan','87654321'))