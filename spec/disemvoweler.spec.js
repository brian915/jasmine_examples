// Include what we need to include: this is specific to jasmine-node
require("../src/disemvoweler.js");

describe('Welcome to The Disemvowler', function(){
    it('removes vowels, and nothing but vowels', function(){
	expect(disemvowel('mmhmm')).toEqual('mmhmm');
	expect(disemvowel("jabooot llageioppu;")).toContain("jbt llgpp;");
	expect(disemvowel("jabooot llageioppu;")).not.toContain("/a|e|i|o|u/");	
    });
    it('removes all lower and uppercase vowels', function(){
	expect(disemvowel('aAeEiIoOuU')).toEqual('');
    });
    it('ignores empty strings', function(){
	expect(disemvowel('')).toEqual('');
    });
});
