describe('Welcome to The Disemvowler', function(){
    it('removes vowels, and nothing but vowels', function(){
	expect(disemvowel('mmhmm')).toEqual('mmhmm');
	expect(disemvowel("jabooot llageioppu;")).toContain("jbt llgpp;");	
    });
    it('removes all lower and uppercase vowels', function(){
	expect(disemvowel('aAeEiIoOuU')).toEqual('');
    });
    it('ignores empty strings', function(){
	expect(disemvowel('')).toEqual('');
    });
});
