# Assign first two numbers and print them
num1 = 0
num2 = 1

print(num1, num2, end = " ")

# Print out the remaining numbers
while (num1 + num2 <= 50):
    num3 = num1 + num2
    print(num3, end = " ")

    # Reassigning the numbers
    num1 = num2
    num2 = num3

# End line
print()