const { polybius } = require("../src/polybius");
const expect = require("chai").expect;

describe('polybius()', () => {
    describe('should have correct input', () => {
        it("should only inlude letter and spaces(will skip other characters)", () => {
            const actual = polybius("test!");
            const expected = '44513444';
            expect(actual).to.equal(expected);
        }) 
        it('should work with capitol letters', () => {
            const actual = polybius("TEST!");
            const expected = '44513444';
            expect(actual).to.equal(expected);
        })
    }); 

    describe('encoding a message', () => {
        it('should should encode a message based on the polybius table', () => {
            const actual = polybius("Hello world", true);
            const expected = "3251131343 2543241341";
            expect(actual).to.equal(expected);
        })
        it('should encode i and j to the number 42', () => {
            const actual = polybius("i j i j");
            const expected = "42 42 42 42";
            expect(actual).to.equal(expected);
        })
    })

    describe('decoding a message', () => {
        it('should decode message based on the polybius table', () => {
            const actual = polybius("23513434112251", false);
            const expected = "message";
            expect(actual).to.equal(expected);
        })
        it('should return false if the input.length is not even', () =>{
            const actual = polybius("2351343411225", false);
            expect(actual).to.be.false;
        })
        it('should return (i/j) when decoding the number 42',() => {
            const actual = polybius('42 42 42 42', false);
            const expected = "(i/j) (i/j) (i/j) (i/j)";
            expect(actual).to.equal(expected);
        })
    })
});