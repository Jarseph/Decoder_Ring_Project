// Write your tests here!
const { caesar } = require('../src/caesar');
const expect = require('chai').expect;

describe('ceasar()', () => {
    describe('shift should be valid', () => {
        it("should return false if the shift is greater than 25", () => {
            const actual = caesar("test", 26);
            expect(actual).to.be.false;
        }) 
        it("should return false if the shift is less than -25", () => {
            const actual = caesar("test", -26);
            expect(actual).to.be.false;
        }) 
        it("should return false if the shift is 0", () => {
            const actual = caesar("test");
            expect(actual).to.be.false;
        })
    }); 
    describe("encoding a message",() => {
        it("should encode message by a given shift value", () => {
            const expected = 'wklqnixo';
            const actual = caesar("thinkful", 3);
            expect(actual).to.equal(expected);
        }); 
        
        it("should encode message by a given shift value that includes special characters and capital letters", () => {
            const expected = 'bpqa qa i amkzmb umaaiom!';
            const actual = caesar("This is a secret message!", 8);
            expect(actual).to.equal(expected);
        });
    })

    describe("decoding a message", () => {
        it("should decode message by a given shift value", () => {
            const expected = 'thinkful';
            const actual = caesar("wklqnixo", 3, false);
            expect(actual).to.equal(expected);
        });
        it("should decode message by a given shift value that includes special characters and capital letters", () => {
            const expected = 'this is a secret message!';
            const actual = caesar("bpqa qa i amkzmb umaaiom!", 8, false);
            expect(actual).to.equal(expected);
        }); 
    })

});