# jasmine_examples
Experiments with Jasmine

Originally started as Follow Along Examples from JS Testing with Jasmine.

Ported to run with jasmine-node.

And then extended with my own examples of each time of Jasmine Matcher:

THE TEST SPEC 'matcher_math.spec.js' IMPLEMENTS A VARIETY OF STANDARD AND CUSTOM MATACHERS:

  STANDARD MATCHERS :

  • toEqual checks for equality, not necessarily the same object.
  • toBe checks if two objects are the same.
  • toBeTruthy checks if a value is truthy (not just true).
  • toBeFalsy checks if a value is falsy (not just false).
  • toBeDefined checks if a value is defined.
  • toBeUndefined checks if a value is undefined.
  • toBeNull checks if a value is null.
  • toBeNaN checks if a value is NaN.
  • toContain checks if a value is inside another.
  • toBeCloseTo checks decimal proximity.
  • toMatch checks if a value matches a given regular expression.
  • toThrow checks if a function throws an error.
  • .not inverts the meaning of the following matcher.
 
  CUSTOM MATCHERS : 

  • toContainMatch checks if a value in the returned array matches another
  • toBeWithinRangeOf checks if a value is within a specified range of values

  TESTS THE FILE 'matcher_math.js' : 

this.function takes a series of arguments , mandatory max range,
as well as optional min_nums and nums count,  representing the number of random numbers 
included in the result.  Returns an array.


  TODO:

  - implement a variety of spies
  
  
  
