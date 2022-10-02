# ASSESSMENT 4: Ruby Coding Practical Questions --------------------------------
# MINASWAN ✌️ ------------------------------------------------------------------

#*******************************************************************************
#====================🧪 assertEqual test method 🧪 =============================
# I decided to create a custom test method to test all the completed challenges
# I realize I could use RSpec for this, (or not do it at all..) but thought I'd 
# make it interesting and create a method that could test for me.
#*******************************************************************************

# takes function to be tested as input (actual)..  
# compares it against the expected outcome (expected)..
# and describes the test (describeTest)

# Will output TEST PASSED if the Tested Function equals the Expected Output.
# Will output FAILED, the Expected Output, and results of Tested Function if
# Tested Function's return does not equal Expected Output

# This function will be called for each test case in the Test Cases section of 
# each Challenge.

def assertEqual(actual, expected, describeTest)
  if actual === expected 
    puts "✅ TEST PASSED ==> 🧪#{describeTest}"
  else 
    puts "❌ FAILED: 🧪#{describeTest}, 
    🤰 expected 👉 '#{expected}', 
    🔴 but got 🤦 '#{actual}'." 
  end
end

#*******************************************************************************
# --------------------1)👉 Create a method that takes in a number and determines 
# if the number is even or odd. Use the test variables provided.
#*******************************************************************************

#~~~~~~~~~~~~~~~~~~~~~~~~~👨‍💻 Method Explanation~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# I used the even? method to determine if the number was even instead of using
# modulus. If even? returns true, then return number is even, else return
# number is odd.
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# def determine_odd_or_even(num)
#   if num.even?
#     "#{num} is even"
#   else 
#     "#{num} is odd"
#   end
# end

#~~~~~~~~~~~~~~~~~~~~~~~~~👨‍💻 Compressed Version~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Decided to refactor the code into one line using a ternary operator.
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# def determine_odd_or_even(num)
#   num.even? ? "#{num} is even" : "#{num} is odd"
# end

def determine_odd_or_even(num); num.even? ? "#{num} is even":"#{num} is odd" end

#---------------------------||🧪 Test Cases 🧪||--------------------------------
# Challenege 1, Test 1                    # ---👇Test Explanation👇 ---
num1 = 7                                  # <== Test Input Variable
assertEqual(determine_odd_or_even(num1),  # <== Method Tested
'7 is odd',                               # <== Expected Output
'Determines if odd of even')              # <== Test Description

# Challenege 1, Test 2
num2 = 42
assertEqual(determine_odd_or_even(num2), 
'42 is even', 
'Determines if odd of even')

# Challenege 1, Test 3
num3 = 221
assertEqual(determine_odd_or_even(num3), 
'221 is odd', 
'Determines if odd of even')

#---------------------||❌ Initial Test Results ❌||----------------------------
# ruby-challenges.rb
# ❌ FAILED: 🧪Determines if odd of even, 
#     🤰 expected 👉 '7 is odd', 
#     🔴 but got 🤦 ''.
# ❌ FAILED: 🧪Determines if odd of even, 
#     🤰 expected 👉 '42 is even', 
#     🔴 but got 🤦 ''.
# ❌ FAILED: 🧪Determines if odd of even, 
#     🤰 expected 👉 '221 is odd', 
#     🔴 but got 🤦 ''.
#-------------------------------------------------------------------------------
#--------------------||✅ Final Test Results ✅||------------------------------
# ruby-challenges.rb
# ✅ TEST PASSED ==> 🧪Determines if odd of even
# ✅ TEST PASSED ==> 🧪Determines if odd of even
# ✅ TEST PASSED ==> 🧪Determines if odd of even
#-------------------------------------------------------------------------------

#*******************************************************************************
# -------------------2)👉 Create a method that takes in a string and removes all 
# the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource:
# https://ruby-doc.org/core-2.6/String.html#method-i-delete
#*******************************************************************************

#~~~~~~~~~~~~~~~~~~~~~~~~~👨‍💻 Method Explanation~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# I used the delete! method to mutate the string and remove all vowels by 
# passing all vowels, upper and lowercase as an argument
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# def removeVowels(string)
#   string.delete!("aeiouAEIUO") 
# end

#~~~~~~~~~~~~~~~~~~~~~~~~~👨‍💻 Compressed Version~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Decided to refacror the code into one line.
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
def removeVowels(string); string.delete!("aeiouAEIUO") end

#---------------------------||🧪 Test Cases 🧪||--------------------------------
# Challenege 2, Test 1
beatles_album1 = 'Rubber Soul'            
assertEqual(removeVowels(beatles_album1), 
'Rbbr Sl',                                 
'Remove all vowels')                       

# Challenege 2, Test 2
beatles_album2 = 'Sgt Pepper'
assertEqual(removeVowels(beatles_album2), 
'Sgt Pppr', 
'Remove all vowels')

# Challenege 2, Test 3
beatles_album3 = 'Abbey Road'
assertEqual(removeVowels(beatles_album3), 
'bby Rd', 
'Remove all vowels')

#---------------------||❌ Initial Test Results ❌||----------------------------
# ruby-challenges.rb
# ✅ TEST PASSED ==> 🧪Determines if odd of even
# ✅ TEST PASSED ==> 🧪Determines if odd of even
# ✅ TEST PASSED ==> 🧪Determines if odd of even
# ❌ FAILED: 🧪Remove all vowels, 
#     🤰 expected 👉 'Rbbr Sl', 
#     🔴 but got 🤦 ''.
# ❌ FAILED: 🧪Remove all vowels, 
#     🤰 expected 👉 'Sgt Pppr', 
#     🔴 but got 🤦 ''.
# ❌ FAILED: 🧪Remove all vowels, 
#     🤰 expected 👉 'bby Rd', 
#     🔴 but got 🤦 ''.
#-------------------------------------------------------------------------------
#--------------------||✅ Final Test Results ✅||------------------------------
# ruby-challenges.rb
# ✅ TEST PASSED ==> 🧪Determines if odd of even
# ✅ TEST PASSED ==> 🧪Determines if odd of even
# ✅ TEST PASSED ==> 🧪Determines if odd of even
# ✅ TEST PASSED ==> 🧪Remove all vowels
# ✅ TEST PASSED ==> 🧪Remove all vowels
# ✅ TEST PASSED ==> 🧪Remove all vowels
#-------------------------------------------------------------------------------

#*******************************************************************************
# -------------------3)👉 Create a method that takes in a string and checks if 
# the string is a palindrome. A palindrome is the same word spelled forward or 
# backward. Use the test variables provided.
#*******************************************************************************

#~~~~~~~~~~~~~~~~~~~~~~~~~👨‍💻 Method Explanation~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# I used the downcase method to account for capital letter edgecases, then used
# the reverse method to reverse the letters of one string..
# then compare the non-reverses string with the reversed string.
# if non-reverse string equals reverse string then return it is a palindrome
# else return not a palindrome 
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# def palindrome_checker(string)
#   if string.downcase === string.downcase.reverse
#     "#{string} is a palindrome"
#   else
#     "#{string} is not a palindrome"
#   end
# end


#~~~~~~~~~~~~~~~~~~~~~~~~~👨‍💻 Refactored Version~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Decided to refactor the code using a ternary operator.
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
def palindrome_checker(str)
  str.downcase === str.downcase.reverse ? 
  "#{str} is a palindrome" : "#{str} is not a palindrome"
end

#---------------------------||🧪 Tests Cases 🧪||-------------------------------
# Challenege 3, Test 1
palindrome_tester1 = 'Racecar'
assertEqual(palindrome_checker(palindrome_tester1), 
'Racecar is a palindrome', 
'Determines if palindrome')

# Challenege 3, Test 2
palindrome_tester2 = 'LEARN'
assertEqual(palindrome_checker(palindrome_tester2), 
'LEARN is not a palindrome', 
'Determines if palindrome')

# Challenege 3, Test 3
palindrome_tester3 = 'Rotator'
assertEqual(palindrome_checker(palindrome_tester3), 
'Rotator is a palindrome', 
'Determines if palindrome')

#---------------------||❌ Initial Test Results ❌||----------------------------
# ruby-challenges.rb
# ✅ TEST PASSED ==> 🧪Determines if odd of even
# ✅ TEST PASSED ==> 🧪Determines if odd of even
# ✅ TEST PASSED ==> 🧪Determines if odd of even
# ✅ TEST PASSED ==> 🧪Remove all vowels
# ✅ TEST PASSED ==> 🧪Remove all vowels
# ✅ TEST PASSED ==> 🧪Remove all vowels
# ❌ FAILED: 🧪Determines if palindrome, 
#     🤰 expected 👉 'Racecar is a palindrome', 
#     🔴 but got 🤦 ''.
# ❌ FAILED: 🧪Determines if palindrome, 
#     🤰 expected 👉 'LEARN is not a palindrome', 
#     🔴 but got 🤦 ''.
# ❌ FAILED: 🧪Determines if palindrome, 
#     🤰 expected 👉 'Rotator is a palindrome', 
#     🔴 but got 🤦 ''.
#-------------------------------------------------------------------------------
#--------------------||✅ Final Test Results ✅||------------------------------
# ruby-challenges.rb
# ✅ TEST PASSED ==> 🧪Determines if odd of even
# ✅ TEST PASSED ==> 🧪Determines if odd of even
# ✅ TEST PASSED ==> 🧪Determines if odd of even
# ✅ TEST PASSED ==> 🧪Remove all vowels
# ✅ TEST PASSED ==> 🧪Remove all vowels
# ✅ TEST PASSED ==> 🧪Remove all vowels
# ✅ TEST PASSED ==> 🧪Determines if palindrome
# ✅ TEST PASSED ==> 🧪Determines if palindrome
# ✅ TEST PASSED ==> 🧪Determines if palindrome
#-------------------------------------------------------------------------------