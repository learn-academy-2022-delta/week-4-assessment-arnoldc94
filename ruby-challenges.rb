# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# Pseudo---->
# create a block named oddOrEven
# pass in a num paramater
# create an if conditional statement that uses the method .even? to determine if the number is even
# if it is even output "#{num} is even"
# create an else conditional statement if the number is odd
# output "#{num} is odd"
# invoke the function, pass in the variable and print the result to the console

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def odd_or_even num 
  if num.even? 
    "#{num} is even"
  elsif num.odd? 
    "#{num} is odd"
  end
end
p odd_or_even num1
p odd_or_even num2
p odd_or_even num3



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete
# Pseudo---->
# create a block named remove_vowels
# pass in a str paramater
# delete any vowels from the string using <str.delete "aeiouAEIOU">
# invoke the block, pass the variable, and print the result to the terminal

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def remove_vowels str 
   str.delete "aeiouAEIOU"
end

p remove_vowels album1
p remove_vowels album2
p remove_vowels album3

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.
#Pseudo----->
# create a block named palindrome
# pass in a paramater named str
# create an if statement that will render true if the lowercase string equals the reversed lowercase string
# if true output "#{str} is a palindrome"
# create an else statement to handle false
# if false output "#{str} is not a palindrome"
# invoke the block, pass the variable and print the result to the terminal

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome str 
  if str.downcase == str.reverse.downcase
    "#{str} is a palindrome"
  else 
    "#{str} is not a palindrome"
  end
end

p palindrome palindrome_tester1
p palindrome palindrome_tester2
p palindrome palindrome_tester3
