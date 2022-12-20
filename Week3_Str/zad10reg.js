function emailValidator(email){
    const arr = email.split('@');
    const arr1 = arr[1].split('.');
    const name = arr[0];
    const adress = arr1[0];
    const domain = arr1[1];
    const reg1 = /[a-z0-9_.]/gi;
    const reg2 = /[a-z0-9\-]/gi;
    const reg3 = /[a-z]/gi;

    if(name.length == 0 || adress.length == 0 || adress.length >63 || domain.length < 2 || domain.length > 63 || arr1.length > 2){
        return false;
    }
    if(name.match(reg1).join('') != name){
        return false;
    }
    if(adress.match(reg2).join('') != adress){
        return false;
    }
    if(domain.match(reg3).join('') != domain){
        return false;
    }
    
    return true;
}
console.log(emailValidator('stfan.jeftic@gmail.com'))