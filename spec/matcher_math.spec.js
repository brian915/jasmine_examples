/**
  THIS TEST SPEC EXPLORES A VARIETY OF STANDARD AND CUSTOM JASMINE MATCHERS

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

  TODO:

  - implement a variety of spies
**/

require("../src/matcher_math.js");

var a = {
    foo: 1,
};

beforeEach(function() {
    this.addMatchers({

	toContainMatch: function(expected){
	    this.message = function(){
		return "Expected " + this.actual + " to contain a match with " + expected;
	    };
	    return containsMatch(this.actual, expected);
	},

	toNotContainMatch: function(expected){
	    this.message = function(){
		return "Expected " + this.actual + " not to contain a match with " + expected;
	    };
	    return !containsMatch(this.actual, expected);
	},
	
	toBeWithinRangeOf: function(distance, base) {
	    this.message = function() {
		var lower = base - distance;
		var upper = base + distance;
		return "Expected " + this.actual + " to be between " +
		    lower + " and " + upper + " (inclusive)";
	    };
	    return Math.abs(this.actual - base) <= distance;
	},
    });
});

function containsMatch(input, matcher){
    if (jasmine.isArray_(input)){
	for (var i = 0; i < input.length; i++){
	    if (new RegExp(matcher).test(input[i])) return true
	}
	return false;
    }
}

describe("testing the behaviour of random number generation", function(){
   
    it("should pass numerous tests for boolean and truth/falsitude", function(){
	expect(matcher_math(5,1,4)).toBeTruthy();
	expect(matcher_math(50000,0,40)).toBeTruthy();
	expect(matcher_math(5,1,4)).not.toBeFalsy();
	expect(matcher_math(5,1,4)).not.toBeNull();
	expect(matcher_math(0)).not.ToBeUndefined;
	expect(matcher_math(a.foo)).toBeDefined;
	expect(matcher_math(a.foo).pop()).not.toBeNaN();
	expect(matcher_math(a.bar)).toBeUndefined;
    });

    it("should return a random number within the range of 0 to the input number", function(){
	expect(matcher_math(0).pop()).toEqual(1);
	expect(matcher_math(100,10).pop()).toBeGreaterThan(1);
	expect(matcher_math(98).pop()).toBeLessThan(100);
	expect(matcher_math(0).pop()).not.toBe(0);
	expect(matcher_math(8).pop()).toMatch(/[0-9]/);
	expect(matcher_math(1).pop()).toBeWithinRangeOf(3,2);
    });
    
    it("test the contents of the returned array for a numeric match", function(){
	expect(matcher_math(500,0,500).pop()).toEqual(jasmine.any(Number));
	expect(matcher_math(9,0,30)).toContainMatch(/[0-9]/);
	expect(matcher_math(80,0,30)).not.toContainMatch(/[A-Z]/);
    });

    it("should throw an error on invalid input",function(){
	expect(function(){ matcher_math(whale); }).toThrow();
	expect(matcher_math(a.bar).pop()).toBeNaN();
	expect(matcher_math(9,0,200,43,69,10)).toBeTruthy();
    });    
});

describe("Using a spy with the random array of numbers generator", function() {
    var foo, bar = null;

    beforeEach(function() {
	foo = {
	    setBar: function(value) {
		bar = value;
	    }
	};

	spyOn(foo, 'setBar');

	foo.setBar(123);
	foo.setBar(456, 'another param');
    });

    it("tracks that the spy was called", function() {
	expect(foo.setBar).toHaveBeenCalled();
    });

    xit("tracks that the spy was called x times", function() {
	expect(foo.setBar).toHaveBeenCalledTimes(2);
    });

    it("tracks all the arguments of its calls", function() {
	expect(foo.setBar).toHaveBeenCalledWith(123);
	expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
    });

    it("stops all execution on a function", function() {
	expect(bar).toBeNull();
    });
});
