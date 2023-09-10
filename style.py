def add(num1, num2):
    return num1 + num2

def subtract(num1, num2):
    return num1 - num2

def multiply(num1, num2):
    return num1 * num2

def divide(num1, num2):
    if num2 != 0:
        result = num1 / num2
        return round(result, 2)  # Round the result to 2 decimal places
    else:
        return "Error: Division by zero is not allowed"

# Test the calculator functions
print(add(5, 3))
print(subtract(5, 3))
print(multiply(5, 3))
print(divide(5, 3))
