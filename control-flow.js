/**
 * CONTROL FLOW:
 * 
 * 0: Conditional statements allow us to control the flow of our application.
 * we can make decisions in our code by asking true or false questions. Based
 * on the answer we decide what code runs if the question is true, and what
 * code runs if the question is false. To do this, we use condtional statements
 * These are if-statements and their chains, if-elseif-else. We can also use 
 * switch statements similarly to control flow.
 * 
 * In javascript, condtional statements boil down to comparisons and or values 
 * based on their truthy-ness or falsey-ness. Values will be coerced to-(changed)
 * into boolean, this means the value is evaluated in a boolean context.
 * 
 * 1) If
 *      The if statement specifies a block of code to be executed if a condition is true
 * 
 * 2) Else-If
 *      The else if statement specifies a new condition if the first condition is false
 * 
 * 3) Else
 *      The else statement specifies a block of code to be executed if the condition is false
 * 
 * 4) Switch
 *      The switch statement executes a block of code depending on different cases. Use switch
 *  to select one of many blocks of code to be executed. Switch statements evaluate an 
 *  expression, the value of the expression is then compared with the values of
 *  each case. If there is a match, the associated block of code is executed.
 *      Used with a break; keyword
 *          ~   The break; keyword breaks out of the switch block. 
 *          ~   This will stop the execution of code or the case 
 *              testing inside the block. 
 *          ~   If a break is ommitted, the next code block in the switch
 *              statement is executed.
 *      Used with a default keyword
 *          ~   The default keyword specifies some code to run if there
 *          ~   is no case match.
 *          ~   There can be only one default keyword in a switch
 *          ~   Is optional, but recommended as it takes care of 
 *              unexpected cases.
 */