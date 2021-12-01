// Unit tests for the helloWorld function
describe('helloWorld Unit Tests', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
// Unit test for the sayHello function
describe("sayHello Unit Tests", function() {
    it("should be a defined function" , function(){
        expect(typeof sayHello).toBeDefined("function");
    });
    //it("should return a string when called" , function(){
        //expect(typeof sayHello()).toBe("string");
    //});
    it("should return \"Hello, Jane!\" when called" , function(){
        expect(sayHello("Jane")).toBe("Hello, Jane!");
        //return "Hello, Jane!"; < what?
    });
    it("should return \"Hello, Alex!\" when called" , function(){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it("should return \"Hello, Pat!\" when called" , function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return "Hello, World!" when called', function(){
        expect(sayHello("World")).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when called', function(){
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when called', function(){
        expect(sayHello(false)).toBe("Hello, World!");
    });
});
describe('isFive', function(){
    it('it should define isFive when called', function(){
        expect(typeof isFive).toBe("function");
    });
    it('should return a boolean no matter the input', function(){
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true when called', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return false when called', function () {
        expect(isFive("5")).toBe(false);
    });
});
describe('isEven', function (){
    it('should define isEven when called', function(){
        expect(typeof isEven).toBe("function");
    });
    it('should return a boolean no matter the input', function (){
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true when called', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when called', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when called', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return true when called', function () {
        expect(isEven("bananas")).toBe(false);
    });
    it('should return true when called', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when called', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when called', function () {
        expect(isEven(false)).toBe(false);
    });
    it('should return false when called', function () {
        expect(isEven()).toBe(false);
    });
});
describe('isVowel',function (){
    it('should define isVowel when called', function (){
        expect(typeof isVowel).toBe("function");
    });
    it('should return boolean no matter what the input', function(){
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true if "isVowel"= a ', function(){
        expect(isVowel("a")).toBe(true);
    });
    it('should return true if "isVowel"= A ', function(){
        expect(isVowel("A")).toBe(true);
    });
    it('should return false if "isVowel"= y ', function(){
        expect(isVowel("y")).toBe(false);
    });
    it('should return false if "isVowel"= 4 ', function(){
        expect(isVowel(4)).toBe(false);
    });
    it('should return false if "isVowel"= true ', function(){
        expect(isVowel(true)).toBe(false);
    });
    it('should return false if "isVowel"= false ', function(){
        expect(isVowel(false)).toBe(false);
    });
    it('should return false if "isVowel"= banana ', function(){
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false if "isVowel"= "" ', function(){
        expect(isVowel()).toBe(false);
    });
});