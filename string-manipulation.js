/**
 * STRING MANIPULATION: 
 /*
 * 0:Strings are how text is stored in javascript. String manipulation
 * is using built in methods to work with text, modifying, accessing, and changing or 
 * copying things.
 * 
 * 1) With Operators: covered in the operator page as well! You can use some of the assignment
 * operators and the comparison operators with alphabetical order for strings:
 * 
 *     Simple Assignment, written with a single = sign
 *      String Assignment:
 */     var charlie = "I guess this was his formal name. ";
 /*      ^     ^    ^                 ^
    declare  name  SAO   value of the variable.*/console.log(charlie); /*
*    String Assignment:
*/      charlie += "Even though that's weird."
/*         ^      ^                  ^                 
          name   AA   'added' value of the variable.*/console.log(charlie);
 /*
 * 2) With String Methods:
    String methods in JavaScript are built-in functions you can use to manipulate 
    or get information from strings. They don’t change the original string (strings are immutable) 
    but return a new value:
    .length	~ Returns the number of characters
    .toUpperCase()  ~Converts to uppercase
    .toLowerCase()	~Converts to lowercase
    .includes()	    ~Checks if a string contains a substring
    .indexOf()	    ~Returns position of a substring/
    .slice()	    ~Extracts part of the string
    .replace()	    ~Replaces part of the string
    .trim()	        ~Removes spaces from both ends
    .split()	    ~Splits a string into an array
  */
    let message = "  Hello, world!  ";

    console.log("orig:", message);
    console.log("trimm:", message.trim());                       // "Hello, world!"
    console.log("Uppercase:", message.toUpperCase());            // "  HELLO, WORLD!  "
    console.log("includes 'world':", message.includes("world")); // true
    console.log("slice:", message.slice(2, 7));                  // "Hello"
 /*
 * 
 */