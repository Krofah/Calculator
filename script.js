function add(num2, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 !== 0) {
        var result = num1 / num2;
        return result.toFixed(2);  // Round the result to 2 decimal places
    } else {
        return "Error: Division by zero is not allowed";
    }
}

// Test the calculator functions
console.log(add(5, 3));
console.log(subtract(5, 3));
console.log(multiply(5, 3));
console.log(divide(5, 3));

// Call the functions and display the output on the web page
document.getElementById("output").innerHTML = "Addition: " + add(5, 3) + "<br>" +
                                              "Subtraction: " + subtract(5, 3) + "<br>" +
                                              "Multiplication: " + multiply(5, 3) + "<br>" +
                                              "Division: " + divide(5, 3);
