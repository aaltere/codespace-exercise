# Create a function to check the user's number
def isPrime(num):

    # 1 is not a prime number
    if (num == 1):
        return False

    # Divide input by 2 through to half the input
    # If remainder is 0 then the input is nor prime
    for i in range(2, num // 2 + 1):
        if (num % i == 0):
            return False
    
    # If function gets here the number is prime
    return True

# Take user input
num = int(input("Enter a number: "))

# Display result of the input
if (isPrime(num)):
    print(num, "is a prime number.")
else:
    print(num, "is not a prime number.")