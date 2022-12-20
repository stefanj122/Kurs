function ascii(char){
    return char.toLowerCase().charCodeAt(0);
}
function emailValidator(email){
    if(!email.includes('@') || !email.includes('.')) {
		return false;
    }

    const arr = email.split('@');
    const arr1 = arr[1].split('.');
    const name = arr[0];
    const adress = arr1[0];
    const domain = arr1[1];

    if(name.length == 0 || adress.length == 0 || adress.length > 63 || domain.length < 2 || domain.length > 63 || arr1.length > 2){
        return false;
    }

    for(let i = 0; i < name.length; i++){
        if(ascii(name[i]) < 48 || ascii(name[i]) > 57){ 
            if(ascii(name[i]) < 97 || ascii(name[i]) > 122){ 
                if(ascii(name[i]) != 46 && ascii(name[i]) != 95){
                return false;
                }
            }
        }
    }
    
    for(let i = 0; i < adress.length; i++){
        if(ascii(adress[i]) < 48 || ascii(adress[i]) > 57){ 
            if(ascii(adress[i]) < 97 || ascii(adress[i]) > 122){ 
                if(ascii(adress[i]) != 45){
                return false;
                }
            }
        }
    }

    for(let i = 0; i < domain.length; i++){
        // console.log(domain[i])
        if(ascii(domain[i]) < 97 || ascii(domain[i]) > 122){ 
            return false;
        }
    }


    return true;
}
console.log(emailValidator('stefan.jeftc122@gmail.com'))