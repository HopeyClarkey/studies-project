/**
 * LOOPS:
 * 
 * 0: (introduction)
 * 
 * 1) Explain while, for and for - in loops:
 * 
 *                          while loop                                                                                                                           
 *    a while loop is a loop that executes with the keyword 'while',                                           
 *    a parenthesis, and a condition that while true, will continue                                                  
 *    to execute the block of code in the body of the while-loop.                                                                                        
 *    
 *  
 *                          for loop                            
 *    for loop is a loop that will move forward from an initialized   
 *    index, to another index (found with a condition), and an
 *    increment statement
 *    
 *  
 *                          for- in loop                      
 *    for-in loop will pull all of the keys out of an Object,
 *    one by one. This allows you to use the key to get the values
 *    to execute the block of code in the body of the while-loop.                                                                                        
 *    
 * 
 * 2) Be able to loop any number of  times, forward counting up to some limit,
 *    and then backward counting down to 0
 * 
 *      Example A: 
 *          declare an array variable to loop through
 *          use a for loop to loop through the array XX times until condition is met
 *          print to the console each loop
 * 
 *      Example B:
 *          use a for loop to loop backward, starting at the .length of the array
 *          print to the console each loop
 * 
 * 
 * 3) Loop over an Array, forwards and backwards
 * 
 *      Example A:
 * 
 * 
 *      Example B:
 * 
 * 
 * 
 * 4) Loop over an Object
 * 
 *      Example A:
 *
 * 
 * 
 * 
 */
    var log = console.log;
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//      Example 2)A:

        for (var i = 0; i <= 13; i++){           // for loop to loop through the array in 
            log(i);                             // order to print the numbers 1- 13
        };

//      Example 2)B:

        for (var i = arr.length; i >= 0; i--){   // for loop to loop back through the array in 
            log(i);                             // order to print the numbers 15-0
        };


//      Example 3)A:







//      Example 3)B:






//      Example 4)A



