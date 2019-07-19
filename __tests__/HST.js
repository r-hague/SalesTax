const HST = require("../public/HST.js");

it("tests that Ontario tax is correct", ()=>{
    expect(HST.calculate("ON", 10)).toBe(1.3);
});

it("tests that Alberta tax is correct", ()=>{
    expect(HST.calculate("AB", 10)).toBe(.5);
});

it("tests that Manitoba tax is correct", ()=>{
    expect(HST.calculate("MB", 10)).toBe(1.3);
});

it("tests that Saskatchwan tax is correct", ()=>{
    expect(HST.calculate("SK", 10)).toBe(1.1);
});

it("tests that British Columbia tax is correct", ()=>{
    expect(HST.calculate("BC", 10)).toBe(1.2);
});

it("tests that the province \"asdf\" throws an exception", ()=>{
    try{
        HST.calculate("asdf", 10);
        fail();
    }
    catch(e){
        expect(e.toString()).toBe("invalid province");
    }
})