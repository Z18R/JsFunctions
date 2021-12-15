function num (){
    let numAll = 0;
    for(let i = 0; i < arguments.length; i++ ){
        numAll += arguments[i];
    }
    return numAll;
}
document.getElementById('demo').innerHTML = num (1,5,20,6);