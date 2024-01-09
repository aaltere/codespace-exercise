# Take user input
userInput = int(input("Input a number: "))

# Display multiplication table from 1 10 of user input
for i in range(1, 11):
    print(userInput, "x", i, "=", userInput * i)