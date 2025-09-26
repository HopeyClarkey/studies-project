/**
 * OPERATORS:
 * 
 * 0: JavaScript Operators are symbols or keywords used to perform operations and 
 * variables. They are the building blocks of JavaScript expressions and can 
 * manipulate data in various ways.
 * 
 * 1) Assignment Operators
 *      Assignment Operators assign values to JavaScript variables. They can 
 * also perform basic operations such as addition or multiplication while 
 * assigning the values.
 * 
 * General Assignment Operators:
 * 
 *      Simple Assignment, written with a single = sign
 *          ~   The simple assignment assigns a simple value to a variable.
 *          ~   This can also be used to assign value to a string.
 * 
 *      Addition Assignment, written with a + and an = sign
 *          ~   The addition assignment adds value to a variable.
 *          ~   This can also be used to assign value to a string.
 * 
 *      Subtraction Assignment, written with a - and an = sign
 *          ~   The subtraction assignment removes value from a variable.
 * 
 *      Multiplication Assignment, written with a * and an = sign
 *          ~   The multiplication assignment multiplies a variable.
 * 
 *      Exponentation Assignment, written with two ** and an = sign
 *          ~   The expoonentation assignment  raises a variable.
 *          to the power of the operand.
 * 
 *      Division Assignment, written with a / and an = sign
 *          ~   The division operator divides a variable.
 * 
 *      Remainder Assigment Operator, written with a % and an = sign
 *          ~   The remainder Operator assigns a remainder to a variable.
 * 
 *  Logical Assignment Operators:
 * 
 *      Logical AND Assignment Operator, written with two && an = sign
 *          ~   The logical AND assignment operator is used between 2 values.
 *          ~   If the first value is true, the second value is assigned.
 * 
 *      Logical OR Assignment Operator, written with two || and an = sign
 *          ~   The logical OR assignment operator is used between 2 values.
 *          ~   If the first value is false, the second value is assigned.
 *
 *      Nullish Coalescing Assignment Operator, written with two ?? and an = sign
 *          ~   The nullish coalescng assignment operator is used between 2 values.
 *          ~   If the first value is undefined or null, the second value
 *              is assigned.
 * 
 * ((Bonus Weird not really an operator:
 *      Object Property Syntax, written with a : inbetween an object's keys and values ))
 *      
 * 2) Arithmetic Operators
 *      Arithmetic Operators perform arithmetic on numbers (literals or variables). They 
 * take numerical values (or strings) as their operands and return a single numerical 
 * value (or string).
 * 
 *      Addition, written with a + sign
 *          ~   The addition assignment adds numbers.
 *          ~   This can also be used to concatenate strings together.
 * 
 *      Subtraction, written with a - sign
 *          ~   The subtraction assignment subtracts numbers.
 * 
 *      Multiplication, written with a * sign
 *          ~   The multiplication assignment multiplies numbers.
 * 
 *      Division, written with a / 
 *          ~   The division operator divides numbers.
 * 
 *      Remainder, written with a % sign, or modulus
 *          ~   The modulus operator returns the division remainder.
 * 
 *      The Increment Operator, written with two ++ signs
 *          ~   The increment operator increments numbers.
 * 
 *      The Decrement Operator, written with two -- signs
 *          ~   The decrement operator decrements numbers
 * 
 *      The Exponentation Operator, written with two ** signs
 *          ~   The exponentation operator raises the first operand 
 *              to the power of the second
 * 
 * ((Bonus Operator Precendence, or what math is done first:
 *      Operator precedence describes the order in which operations are performed in an 
 * arithmetic expression. As in traditional school mathematics, Multiplication (*) and division (/) 
 * have higher precedence than addition (+) and subtraction (-). And (as in school mathematics) 
 * the precedence can be changed by using parentheses. When using parentheses, the operations 
 * inside the parentheses are computed first. When many operations have the same precedence,
 * they are computed from left to right.))
 * 
 * 3) Comparison Operators
 *      Comparison Operators are used to compare two values. They will always return
 * true or false. They can be used in conditional statements to compare values
 * and take action depending on the result. These can also be used on strings.
 * 
 *      Equal to Operator, written with two == signs
 *          ~   compares two values
 *          ~   this operator will coerce a string to a number if digits
 * 
 *      Equal Value and Equal Type Operator, written with three === signs
 *          ~   compares two values, using strict match rules for both value and type
 *
 *      Not Equal Operator, written with a ! and a = sign
 *          ~   this compares two values and returns true if they are NOT a match
 *          ~   this will also coerce a string to a number if digits
 *
 *      Not Equal Value, or Not Equal Type Operator written with a ! and two = signs
 *          ~   this compares two values, returns true if not a match with strict value and type
 * 
 *      Greater Than Operator, written with a > sign
 *          ~   Compares two values, returns true if the value on the left is greater 
 *              than the value on the right
 *          ~   When used on strings, letters are ranked alphabetically.
 * 
 *      Less Than Operator, written with a < sign
 *          ~   Compares two values, returns true if the value on the left is less 
 *              than the value on the right
 *          ~   When used on strings, letters are ranked alphabetically.
 * 
 *       Greater Than or Equal to Operator, written with a > and a = sign
 *          ~   Compares two values, returns true if the value on the left is greater 
 *              than the value on the right, including the value on the right itself
 *          ~   When used on strings, letters are ranked alphabetically.
 * 
 *      Less Than or Equal to Operator, written with a <  and a = sign
 *          ~   Compares two values, returns true if the value on the left is less 
 *              than the value on the right, including the value on the right itself
 *          ~   When used on strings, letters are ranked alphabetically.
 * 
 * 4) Logical Operators
 *      A logical operator is one or two symbols or a keyword that tells the computer 
 *  how to combine conditional statement. The result of using a logical operator is a
 *  boolean value (true or false). There are three common logical operators:
 * 
 *      Logical And Operator, written with two && symbols
 *          ~   The logical operator && requires the values on both sides to be true 
 *              for the result to be true, otherwise will return false
 * 
 *      Logical Or Operator, written with two || symbols
 *          ~   The logical operator || requires a value on either side to be true 
 *              for the result to be true, otherwise will return false
 *
 *      Logical NOT Operator, written with a ! symbol
 *          ~   The logical operator ! requires both values on either side to be false
 *              for the result to be true, otherwise will return false 
 * 
 * 5) Unary Operators (!, typeOf, -)
 *      JavaScript Unary Operators work on a single operand and perform various operations, 
 *  like incrementing/decrementing, evaluating data type, negation of a value, etc.
 *
 *      Unary Plus Operator, written with a + symbol
 *          ~   used to convert operand into number if possible. used to ensure numerical 
 *  operations on numeric string. If string represents a valid number, it will be 
 *  converted into a number.
 * 
 *      Unary Minus Operator, written with a - symbol
 *          ~   used to convert operand into number if possible. used to ensure numerical 
 *  operations on numeric string. If string represents a negative number, it will be 
 *  converted into a negative number.
 * 
 *      Logical Not Operator, written with a ! symbol
 *          ~   a unary operator that negates the Boolean value of an operand, 
 *  converting true to false and false to true.
 * 
 *      typeof Operator, written with lowercase typeof
 *          ~   this returns the datatype of it's operand in the form of a string.
 *          ~   can be used on any object, function, or variable
 *          ~   lots of objects will default to object(like arrays).
 * 
 *      delete Operator, written with lowercase delete
 *          ~   this removes a property from an object. If no other references exists, 
 *              the property's memory is automatically released.
 * 
 *      void Operator, written with lowercase void
 *          ~   this evaluates the given expression and returns undefined.
 * 
 * 
 * 
 * 
 * 6) Ternary Operator (a ? b : )
 *      This operator pattern can replace an if/else statement.
 * 
 *      (comparison statement  ?  result if true : result if false)
 * 
 * 
 */