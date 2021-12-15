//sum of the number

// function num (){
//     let numAll = 0;
//     for(let i = 0; i < arguments.length; i++ ){
//         numAll += arguments[i];
//     }
//     return numAll;
// }
// document.getElementById('demo').innerHTML = num (1,5,20,6);

// increment

// function incrementValue()
// {
//     var value = parseInt(document.getElementById('number').value, 10);
//     value = isNaN(value) ? 0 : value;
//     value++;
//     document.getElementById('number').value = value;
// }
// let i = 0;
// function btn(){
//     document.getElementById('inc').value = ++i;
   
// this function - grabbing the value of x

// let x = 2;
// function myAmazingfunction(){
//     return this;
// } 
// document.getElementById('demo').innerHTML = x;

const objectName = {
    FirstName: "Joezer",
    LastName: "Cardoza",
    FullName: function(){
        return this.FirstName + " " + this.LastName;
    }
}
document.getElementById("demo").innerHTML = objectName.FullName();