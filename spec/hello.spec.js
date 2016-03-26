// Include what we need to include: this is specific to jasmine-node
require("../src/hello.js");

describe('Testing the Contents of the Page',function(){
    it('Should Say Hello World', function(){
	expect(helloWorld()).toEqual("Hello World!");
	expect(helloWorld()).toContain("World");
	
    });
});
