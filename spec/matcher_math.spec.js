//  • toEqual checks for equality, not necessarily the same object.
//  • toBe checks if two objects are the same.
//  • toBeTruthy checks if a value is truthy (not just true).
//  • toBeFalsy checks if a value is falsy (not just false).
//  • toContain checks if a value is inside another.
//  • toBeDefined checks if a value is defined.
//  • toBeUndefined checks if a value is undefined.
//  • toBeNull checks if a value is null.
//  • toBeNaN checks if a value is NaN.
//  • toBeCloseTo checks decimal proximity.
//  • toMatch checks if a value matches a given regular expression.
//  • toThrow checks if a function throws an error.
//  • .not inverts the meaning of the following matcher.

require("../src/matcher_math.js");

describe("testing the behaviour of random number generation", function(){
    it("should pass numerous tests for boolean and truth/falsitude", function(){
	expect(matcher_math(5)).toBeTruthy();
	expect(matcher_math(5)).not.toBeFalsy();
	expect(matcher_math(5)).not.toBeNull();
	expect(matcher_math('x')).toBeNaN();
	expect(matcher_math(0)).not.ToBeUndefined;
    });

    it("should return a random number within the range of 0 to the input number", function(){
	expect(matcher_math(0)).toEqual(1);
	expect(matcher_math(0)).not.toBe(0);
    });
    it("should allow an array  to be returned, if an array is provided", function(){
	//contains
    });
});

