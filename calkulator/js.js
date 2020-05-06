var Buttons = document.getElementsByClassName('button');

function getDataNumber() {
    var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');

    var array = [Number(input1.value), Number(input2.value)];

    return array;
}

function makeOperation(operation) {
    var array = getDataNumber();

    if (operation === '+') { 
        console.log(array[0] + array[1]);
    } else if(operation === '-'){
        console.log(array[0] - array[1]);
    } else if(operation === '*'){
        console.log(array[0] * array[1]);
    } else if(operation === '/'){
        console.log(array[0] / array[1]);
    } else{ 
        console.log('Undefined operation');
    }
   
}

function onButtonClick(event){
    var clicedElement = event.currentTarget;
    var operation = clicedElement.value;
    makeOperation(operation);
}



for (var i = 0; i < Buttons.length; i++) {
    Buttons[i].addEventListener('click', onButtonClick);
    
}


