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
  necessarily be a normal Attribute or Behavior of that class.

* Functional programing would not rely on Objects, but on functions calls 
instead.

Researched answer:
* According to: https://en.wikipedia.org/wiki/Functional_programming:
  * Functional programming follows th paradigm where programs are created     
  with functions. 
  * Some languages that take advantage of Functional programming include:
    * JavaScript, C++, Kotlin, Python, Java, Rust, Perl, Go, and C#. 

* According to: https://en.wikipedia.org/wiki/Object-oriented_programming:
  * Object-Oriented programming is centered around "Objects" which can hold code
  and data.
  * Some of the languages that take advantage of OOP include:
    * JavaScript, Java, Python, C#, C++, Ruby, Swift, Kotlin, and Perl.


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
According to: https://rails.devcamp.com/trails/ruby-programming/campsites/working-with-numbers-in-ruby/guides/difference-between-integers-and-floats-in-a-ruby-program :
* You are more likely to use floats in real life applications in databases as 
compared to integers due to floats being more accurate.
* Integers are good for things such as ID numbers and when you know you will not
be performing calculations. 
---
<!-- ----------------------------------------------------------------------- -->
3. Ruby has an implicit return. What does that mean?

Your answer:
* This means that ruby will return the last line in a method or conditional even 
though there is no "return" in the method.

Researched answer:
* According to: https://medium.com/@bunlong/arrow-functions-return-rules-in-javascript-b63ed5f25994#:~:text=What%20is%20Implicit%20Return%3F,return%20in%20a%20concise%20body:
  * An implicit return is when a function returns a value without using the return
keyword.

---
<!-- ----------------------------------------------------------------------- -->
4. What is a block in Ruby?

Your answer:
* A block is an anonymous section of code that performs a given task.
* Blocks can be inside Methods to allow being called multiple times.

Researched answer:
* According to: https://engineering.gusto.com/ruby-blocks-simplified/#:~:text=Blocks%20are%20Ruby's%20version%20of,more%20reusable%20and%20less%20verbose:
  * A block is an anonymous function that will return a value from the method that called it.

---
<!-- ----------------------------------------------------------------------- -->
5. How do you extract a value in a Ruby hash?

Your answer:
* Similar to JavaScript with Key:Value pairs, you would use the key in 
conjunction with the hash you were trying to obtain the value from with 
bracket
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
* According to: https://thedevpost.com/blog/extract-key-or-value-from-hash-in-ror/:
  * Another method of extracting a value from a hash is by using the .values method. This will return all the values on the object you apply the method to.

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
  * Active Record is the Model in "MVC" thats responsible for the representing the data and logic. 
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
