
// function addNumbers(num1, num2){
//     let sum = num1 + num2;
//     return sum
// }


// console.log(addNumbers(5, 10));


//scope global and local variables

let globalVariable = 'I am a global variable';

function printBothVariables(){
    let localVariable = 'I am a local variable';
    
    console.log(globalVariable)
    console.log(localVariable)

}

printBothVariables()
console.log(globalVariable)
console.log(localVariable)
