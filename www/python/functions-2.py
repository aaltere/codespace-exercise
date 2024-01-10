# Create recurring function to calculate factorial
def factorial(n):

    # Return 1 if n reaches 1
    if (n <= 1):
        return 1

    return n * factorial(n - 1)

# Get user input
n = int(input("Enter a positive integer: "))

# Print out factorial of the input
print("Facotrial of", n, "is", factorial(n))