# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have 
answered the question completely on your own, there is always something more to 
learn. Write your researched answer in your OWN WORDS.

---
<!-- ----------------------------------------------------------------------- -->
1. What is object-oriented programming? How is it different than functional 
programming?

Your answer:
* OOP is programming using Objects. This approach involves thinking in a way as 
we would in normal day to day life.
  * Example: Dog Class, Cat Class, Bunny Class 

* This entails having Classes which provide the layout of Attributes and 
Behaviors an Object will have when it is constructed from a Class.
* Class can be used to created multiple Objects from it's class
  * Objects can have different data such as a different name, as long as it
  follows the constructors of the Class it was created from. 
  * Modules can be used to add other functionality to created objects that may 
  necesarilly be a normal Attribute or Behavior of that class.
Researched answer:

---
<!-- ----------------------------------------------------------------------- -->
2. What is the difference between a Float and an Integer in Ruby?

Your answer:
* Float is a floating point number, meaning that it is number with a decimal 
place. Its more precise to use a Float for arithmetic operations.
  * Example: 1.5, 3.55, .003
  * Arithmetic Example: 7/2 = 3.5

* An Integer is a whole number and is less accurate when doing arithmetic 
operations due to numbers that may return decimal number being rounded down to 
the nearest whole number
  * Example: 1, 2, 3, 4, 5, -10
  * Arithmetic Example: 7/2 = 3 

Researched answer:

---
<!-- ----------------------------------------------------------------------- -->
3. Ruby has an implicit return. What does that mean?

Your answer:
* This means that ruby will return the last line in a method or conditional even 
though there is no "return" in the method.

Researched answer:

---
<!-- ----------------------------------------------------------------------- -->
4. What is a block in Ruby?

Your answer:
* A block is an anonymouse section of code that performs a given task.
* Blocks can be inside Methods to allow being called mutliple times.

Researched answer:

---
<!-- ----------------------------------------------------------------------- -->
5. How do you extract a value in a Ruby hash?

Your answer:
* Similar to JavaScript with Key:Value pairs, you would use the key in 
conjuction with the hash you were trying to obtain the value from with backet
notation.
  * If you were using a symbol for a key, you would have to add the ":" in front 
of the key. 
  * Keys can be any datatype.. such as strings, hashes, floats, integers, arrays 
  and so-on.

* Example: 
```ruby 
this_hash = {cherry: 'A small red fruit', jalapeno: 'A spicey addition to any dish'}

p this_hash[:cherry] # 'A small red fruit'
```
Researched answer:

---
<!-- ----------------------------------------------------------------------- -->
## Looking Ahead: Terms for Next Week

1. PostgreSQL:
* PostgresSQL is a relational database manager that uses the SQL language. 
* According to: https://www.postgresql.org/ :
  * PostgreSQL is the world's most advanced open .source relational database. It 
goes on to say its an Object- Relational database that extends the SQL language
with a rubust collection of features and security.   
---

2. Ruby on Rails:
* This is used in the backend on for rapid deployment of web applications.
* According to: https://rubyonrails.org/ :
  * Rails is a full-stack framework utilizes the Ruby language and has tools for
   the front and backend.
  * It is used to make programming web applications easier and allows developers
  to write less code to accomplish more.
  * It's an opinionated software which means it has it's best practices in which
  it will follow to complete a task.
--- 

3. ORM: 
* My first instinct is to say Operational Risk Management, but thats a 
acronym used in the miliary.
* According to https://blog.bitsrc.io/what-is-an-orm-and-why-you-should-use-it-b2b6f75f5e2a:
  * ORM stands for Object-Relational-Mappers 
  * ORM allows you to write SQL queries through Object Oriented languages like 
  Ruby or JavaScript.
---  

4. Active Record:
* According to: https://guides.rubyonrails.org/active_record_basics.html:
  * Active Record is the Model in "MVC" thats responisble for the representing the data and logic. 
  * It's used to help create and use data in objects that require persistent
  storage.
---

5. Migrations:
* According to: https://guides.rubyonrails.org/active_record_migrations.html:
  * Migrations are easy ways to alter database schemas over time consistently. 
  * Takes advantage of the Ruby language to do the heavy lifting so the developers
  does not have to write SQL.
  * Allows schema and changes to database to be independent.
  * Each migration is a new version of the database.
