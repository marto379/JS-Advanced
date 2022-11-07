let{assert} = require("chai");
let{lookupChar} = require("./LookUpChar");

describe("Test lookupFuncionality",()=>{
    it("result should be undefined if input is not correct",()=>{
        assert.equal(lookupChar(5,5),undefined);
                     

    });
    it("should return undefined 2",()=>{
        assert.equal(lookupChar("pesho","gosho"),undefined);
    });
    
    it("should return undefined 3",()=>{
        assert.equal(lookupChar([],0),undefined);
    });

    it("should return undefined 4",()=>{
        assert.equal(lookupChar("pesho",0.99),undefined);
    });
});
describe("Incorrect index",()=>{
    it("should return incorect index",()=>{
        assert.equal(lookupChar("pesho",5),"Incorrect index");
        
    });
    it("should return incorect index 2",()=>{
        
        assert.equal(lookupChar("pesho",-1),"Incorrect index")
    });
    it("should return incorect index 3",()=>{
        
        assert.equal(lookupChar("pesho",100),"Incorrect index")
    });
});

describe("should return correct char",()=>{
    it("should return correct char",()=>{
        assert.equal(lookupChar("pesho",0),"p");
    });
    it("should return correct char 2",()=>{
        assert.equal(lookupChar("pesho",4),"o");
    });
    
})