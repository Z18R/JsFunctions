// function num (){
//     let numAll = 0;
//     for(let i = 0; i < arguments.length; i++ ){
//         numAll += arguments[i];
//     }
//     return numAll;
// }
// document.getElementById('demo').innerHTML = num (1,5,20,6);

// function incrementValue()
// {
//     var value = parseInt(document.getElementById('number').value, 10);
//     value = isNaN(value) ? 0 : value;
//     value++;
//     document.getElementById('number').value = value;
// }
let i = 0;
function btn(){
    document.getElementById('inc').value = ++i;
   
}
