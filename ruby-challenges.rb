# ASSESSMENT 4: Ruby Coding Practical Questions --------------------------------
# MINASWAN ✌️ ------------------------------------------------------------------

#*******************************************************************************
# I decided to create a custom test method to test all the completed challenges
# I realize I could use RSpec for this, (or not do it at all..) but thought I'd 
# make it interesting and create a method that could test for me.
#====================🧪 assertEqual test method 🧪 =============================
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

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'



#*******************************************************************************
# -------------------2)👉 Create a method that takes in a string and removes all 
# the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource:
# https://ruby-doc.org/core-2.6/String.html#method-i-delete
#*******************************************************************************

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'



#*******************************************************************************
# -------------------3)👉 Create a method that takes in a string and checks if 
# the string is a palindrome. A palindrome is the same word spelled forward or 
# backward. Use the test variables provided.
#*******************************************************************************

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'
