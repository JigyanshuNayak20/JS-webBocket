// function:- its a block of code designed to perform a perticular task. a javascript function is executed when something invoked it(call it)

// ex1

// function sayname()
// {
//     console.log("G");
//     console.log("I");
//     console.log("F");
//     console.log("T");
// }
// sayname();

// sayname is reference but () is execution.

// ex2

// function addTwoNumber(number1, number2)
// {
//     console.log(number1 + number2)
// }



function addTwoNumber1(number1, number2)
{
    let result= number1 + number2;
    return result;
}
const result = addTwoNumber1(3,5);
console.log("result:", result);


function loginUserMessage(username="rohit") {
    if (!username) {
        console.log("please enter your name ");
        return;
    }
    return ${username} just logged in;
}
console.log(loginUserMessage("Devraj"));
console.log(loginUserMessage("hari"));


function calculateprice(...num1) {   // where ...name is rest operator. 
    return num1;
}
console.log(calculateprice(34,34,23,23));


const user = {
    username : "gift",
    price : 400

}

function handleObject(anyObject) {
    console.log(username is ${anyObject.username} and price is ${anyObject.price});
}

console.log(user);