let{assert} = require("chai");
let{isOddOrEven} = require("./EvenOrOdd");

describe("Test checking",()=>{
    it("result should be undefined with array arg",()=>{
    assert.equal(isOddOrEven([]),undefined)
    });

    it("should return undefined when arg is empty obj",()=>{
        assert.equal(isOddOrEven({}),undefined)
    });

    it("should return undefined when arg is obj",()=>{
        assert.equal(isOddOrEven({name:"Pesho"}),undefined)
    });

    it("should return undefined when arg is number",()=>{
        assert.equal(isOddOrEven(1),undefined)
    });

    it("should return undefined when arg is boolean",()=>{
        assert.equal(isOddOrEven(true),undefined)
    });
})

describe("Checking with correct value",()=>{
   it("should return even with even string",()=>{
    assert.equal(isOddOrEven("love"),"even")
    }) ;

    it("should return odd when odd string",()=> {
        assert.equal(isOddOrEven("alo"),"odd")
    });
});

