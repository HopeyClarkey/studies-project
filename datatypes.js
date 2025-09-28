/**
 * DATATYPES:
 * 
 * 0: Javascript has several major categories to describe a value's type:
 * 
 * 
 * 
 * 1)                               Number: 
 *    simple/primitive datatype, represents a numeric value or integer.
 */
        var number = 13;    //an initialized variable representing the number 13
/*
 * 2)                               String:
 *       simple/primitive datatype, represents a string of characters,
 *                          commonly used for text.
*/
        var string = 'This is a string.'; //string type, text message
/*
 * 3)                               Boolean: 
 *          simple/primitive datatype, represents a true/false value.
*/
        var booleanOne = true;      //this value is true,
        var booleanTwo = false;     // this value is false
/* 
 * 4)                                Array: 
 *      complex datatype, represents a list of data, contained within a [].
 */ 
        var exampleArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // array(list) of numbers     
 /*
 * 5)                                Object: 
 *                 complex datatype, represents a group of data 
 *                        subgrouped by keys & values 
*/
        var exampleObj = {          //an object named exampleObj
                keyOne: 'value 1',  //key called keyOne, value is a string
                keyTwo: 2,          //key called keyTwo, value is numeric value 2
                keyThree: true,     //key called keyThree, value is boolean true
    };
/* 
 * 6)                               Function:
 *                 complex datatype, represents any number of 
 *                      statements that work with data.
*/
        function print(parameter){  //this creates a function called print
        console.log(parameter);     //this prints the parameter to the console
                                    //could put more operations here
    };                              //ends block of code
/*
 * 7)                              Undefined:
 *             simple/primitive datatype- it exists, but has no value
*/
        var und = undefined;        //defines variable with a value of undefined
        print(und);                 //prints value of und to console
/*
 * 8)                                Null:
 *                  simple/primitive datatype, no data at all.
 */
        var nul = null;             //defines variable with a value of 'null'
        print(nul);                 //prints value of nul to console
 /*
 * 9)                                 NaN:
 *              simple/primitive datatype- "Not a Number"
 */
        var nAN = NaN;              //defines variable with a value of Not-a-Number
        print (nAN);                //prints value of nAN to the console. 
/*        
 * 10)                      Infinity and -Infinity:
 */

 /* 
 * 11) The difference betweeen primitive/simple and complex datatypes
 * 
 *                         Simple datatypes: 
 *    Are immutable, they do not hold, collect, or aggregate other values, 
 *    and operations on simple datatypes return simple values, they do not 
 *    alter the original value. 
 */
        print('These are simple datataypes: '+ string + ' ' + number + 
        ' ' + booleanOne + ' ' + booleanTwo + ' ' + und + ' ' + nul + ' ' + nAN); 
        // prints this message and simple datatypes to console
/* 
 *                             Complex datatypes:
 *    Are mutable, the aggregate other values and therefore are of indefinate 
 *    size. Objects can contain any number of key:value pairs. Arrays can 
 *    have any number of elements. Functions can have any number of statements.
 */
        print('These are complex datatypes: '+ exampleArr + ' ' + exampleObj);
        // prints this message & both an array & an object to the console
        // function can also go here!
/* 
 * 
 * 12)           Primitive values are passed to a function BY COPY,
 *                  and complex value types BY REFERENCE. 
 * 
 *    Simple value types are 'copy-by-value'- when assigning or passing, 
 *    simple data-types are copied from one variable to the next. Variables 
 *    can only directly contain simple types, because the maximum amount of 
 *    memory a simple datatype is is 8 bites, which is the amount
 *    each variable takes up in memory.
 * 
 * 
 * 
 *    Complex datatypes are 'copy-by-reference'- when assigning or passing, 
 *    complex data-types are passed by reference to the data (too much memory
 *    needed to copy directly.
 * 
 * 
 */
// 10) Infinity & -infinitiy