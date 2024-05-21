
var now = new Date()
// console.log(now);
function date(){
    var date= document.getElementById("date")
    console.log(date = now);
    document.write(date = now);
}

function greet(){
    var fistName = prompt("enter your first name ")
    var lastName = prompt(" enter your last name ")
    var fullName = ("Hello Welcome "+ fistName +" "+ lastName)
    var greeting =document.getElementById("greet")
    console.log(greeting = fullName);
    document.write(greeting = fullName);

}

function add(){
    var num1 = +prompt("enter 1st num")
    var num2 = +prompt("enter 2nd num")
    var sum = (num1 + num2)
    console.log(sum);
    var result =document.getElementById("add")
    var result2 = result = sum
    document.write("Your result is "+ result2);
}

function addition(){
    var num1 = +prompt("enter 1st num")
    var num2 = +prompt("enter 2nd num")
    var operator = prompt("enter operator")
    if(operator === "+"){
        var add = num1 + num2
        console.log(add);
        document.write("your ans is " + add)
    }else if(operator === "-"){
        var minus = num1 - num2
        console.log(minus);
        document.write("your ans is " + minus)
    }else if(operator === "*"){
        var multiply = num1 * num2
        console.log(multiply);
        document.write("your ans is " + multiply)
    }else if(operator === "/"){
        var divide = num1 - num2
        console.log(divide);
        document.write("your ans is " + divide);
    }else{
        document.write("syntex error")
    }
 
}


function square(squareNum){
    var squareNum = prompt("enter the number")
    var squarel = squareNum * squareNum
    var ans = squarel
    var square = document.getElementById("square")
    var squareAns = (square = ans);
    console.log(squareAns);
    document.write("your ans is " +squareAns)

}
