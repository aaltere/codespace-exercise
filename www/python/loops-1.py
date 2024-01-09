# Take user inputs
num1 = int(input("Input first number: "))
num2 = int(input("Input second number: "))
num3 = int(input("Input third number: "))

# Compare the inputted numbers
if (num1 == num2 and num2 == num3):
    print("All numbers are equal")
elif (num1 != num2 and num2 != num3 and num1 != num3):
    print("All numbers are different")
else:
    print("Neither all are equal or different")