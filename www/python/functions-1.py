# Create list of numbers
num = [10, 2, 3, 4, 7]

# Create function
def printMax(list):
    
    # Print list
    print(list)

    # Set initial max value to first value in the list
    max = list[0]

    # Loop through to find the max number and assign the number to max
    for i in list:
        if max < i:
            max = i

    # Print max number
    print(max)

# Call function
printMax(num)