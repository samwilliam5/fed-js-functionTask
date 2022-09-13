var number1=parseInt(prompt("Enter the any number"));
var number2=parseInt(prompt('Enter the another number'));
var operator=prompt('Enter the any operator');
function calculate(){
switch(operator)
{
    case '+':
        console.log('Addition' );
        console.log(number1+number2);
        break;
    
    case '-':
        console.log('subtraction');
        console.log(number1-number2);
        break;

    case '*':
        console.log('multiplication');
        console.log(number1*number2);
        break;

    case '/':
        console.log('division');
        console.log(number1/number2);
        break;
    
    case '^':
        console.log("power");
        console.log(Math.pow(number1,number2));
        break;

    case '%':
        console.log("percentage value");
        console.log(number1%number2);
        break;
}
}

calculate();