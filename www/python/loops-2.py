# Get user inputs
num1 = int(input("Input first number"))
num2 = int(input("Input second number"))
num3 = int(input("Input third number"))

# Check order and display appropriate message
if (num2 > num1 and num3 > num2):
    print("Increasing order")
elif (num2 < num1 and num3 < num2):
    print("Decreasing oder")
else:
    print("Neither increasing or decreasing order")