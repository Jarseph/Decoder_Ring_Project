const { substitution } = require("../src/substitution");
const  expect  = require("chai").expect;

describe('substitution()', () => {
    describe('input should be entered correctly', () => {
        it('should return false if no substituion alphabet was entered', () => {
            const actual = substitution("test");
            expect(actual).to.be.false;
        });
        it('should return false if substitution alphabet length is not exactly 26', () => {
            const actual = substitution("testMessage", "testAlphabet");
            expect(actual).to.be.false;
        });
        it('should return false if the substitution alphabet has any repeating characters', () => {
            const actual = substitution("testMessage", "testalphabetTestAlphabetaa");
            expect(actual).to.be.false;
        });

    });
    describe('encoding a message', () => {
        it('should encode message based on a given subsititution alphabet', () => {
            const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq");
            expect(actual).to.equal("ykrrpik");
        });
        it('should maintain spaces when entered in the given message', () => {
            const actual = substitution("m e s s a g e", "plmoknijbuhvygctfxrdzeswaq");
            expect(actual).to.equal("y k r r p i k");
        });
        it('should be able to use any kind of unique characters in subsitution alphabet', () => {
            const actual = substitution("m e s s a g e", "$lmo@n%jbuhv!gctfx#dzeswaq");
            expect(actual).to.equal("! @ # # $ % @");
        });
    });
    describe('decoding a message', () => {
        it('should decode a message with a given subsititution alphabet', () => {
            const actual = substitution("ykrrpik", "plmoknijbuhvygctfxrdzeswaq", false);
            expect(actual).to.equal("message");
        });
        it('should maintain spaces in a given message', () => {
            const actual = substitution("y k r r p i k", "plmoknijbuhvygctfxrdzeswaq", false);
            expect(actual).to.equal("m e s s a g e");
        });
        it('should be able to decode with unique characters in the substitution alphabet', () => {
            const actual = substitution("! @ # # $ % @", "$lmo@n%jbuhv!gctfx#dzeswaq", false);
            expect(actual).to.equal("m e s s a g e");
        });
    })
})
