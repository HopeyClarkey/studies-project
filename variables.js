/**
 * VARIABLES:
 * 
 * 0: In order to create and keep things in memory, you have to give them 
 *    a name. These containers that 'point' to a value of some datatype are 
 *    called variables. Datatypes can be Numbers, Strings Arrays, Objects, 
 *    etc. Variable means that we can change the value, and even the type 
 *    of value to which they point.
 * 
 */
 /* 
 * 1)                       Delcaration and Assignment: 
 *    Declaring a variable is done with var, which means it now exists. 
 *    Assigning-or initializing a variable is one more step. It means 
 *    giving the variable a value. 
 *
 */     var currentPetName; //variable created but not assigned
        currentPetName = 'Logan'; //assigned string "Logan" to currentPetName
        console.log(currentPetName);
 /*
 * 
 * 2)                           var, let, & const:
 *    var was original way to declare a variable, but let and const added in
 *    2015. Differenciated by re-assignment type & hoisting scope. var has no
 *    restrictions on reassignment and var will hoist initialization value to 
 *    scope. let also allows you to reassign variable throughout, and const 
 *    will not allow you to to reassign. let and const will hoist to scope, 
 *    but will give undefined as value(some consider this non-hoisting???) if 
 *    called prior to declaration/initialization statements.
 *
 */     var catName = 'Banana';     //  variable created, catName, assigned value with var
            console.log(catName);   //  print cat name
            catName = 'Manson';     //  variable catName reassigned to different value
        const dogName = 'Logan';    //  variable dogName created and assigned to 'Logan' with const
            console.log(dogName);   //  print constrained dog name
            //dogName = 'otherName';  //  attempt to reassign dog name ((remove/add comment lines))
            console.log(dogName);   //  print dogName after failed attempt to reassign
 /*    ((please comment out this dog name reassignment so that the hoisting problems will work))
 *  
 * 3)                               Hoisting:
 *    Hoisting refers to being able to ust a variables value in it's scope 
 *    before the line it was declared. The interpreter appears to move the 
 *    declaration of functions, variables, classes(?) or imports(??) to the
 *    top of their scope, prior to the execution of the code. Before the
 *    statements of a program are executed, all var and function declarations
 *    ((not initalizations)) are 'dragged' to the top of the program.
 *    var values will not throw referenceErrors if you try to reference them
 *    before they are declared, let and const will. 
 *    let and const will NOT hoist(ish, see above).
 * 
 *
 *    Hoisting with Var: 
 */   console.log(cat);      // this will print undefined, as the variable cat is hoisted, but the value is not 
      var cat = "Manson";    // once value is assigned,
      console.log(cat);      // this will print 'Banana'

//    Hoisting with Let or Const:
      //console.log(dog); // ReferenceError: Cannot access 'dog' before initialization ((remove/add comment lines))
      let dog = "Logan";// This will throw an error, as block scoping is only available after declaration

//    Function Declarations are Fully Hoisted:
      console.log(callLogan());     //    this will print as you can use declared functions due to hoisting (see below)
      function callLogan(){
      return 'Come here bubbadoh!';
      }

//    But Function Expressions are not Fully Hoisted:
      //console.log(okFingers()); //  TypeError: okFingers is not a function ((remove/add comment lines))

      var okFingers = function (){
      return ['logan ', 'will ', 'sit ', 'down.'];
      } // so this explains a big reason why you have these different methods. you are still making a function
        // but because it is 'expressed' and not 'declared', it doesn't exist yet.

        console.log(okFingers()); //  This will print

/*
If the errors are cleared with commenting above, your console should look like this after printing:
      Logan
      Banana
      Logan
      Logan
      undefined
      Manson
      Come here bubbadoh
      ['logan ', 'will ', 'sit ', 'down.']
*/


