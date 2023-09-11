const capitalize = require('../functions/capitalize');
const chai = require('chai')
const expect = chai.expect;

describe("Tests for Capitalize function", ()=> {

    it('Capitalize should be a function', ()=> {
        expect(capitalize).to.be.a('function');
    })

    it('capitalize should return a string if no arg is passed',()=> {
        expect(capitalize()).to.be.a('string')
    })

    it('capitalize should return a string if arg is an empty string', () => {
        expect(capitalize('')).to.equal('')
    })

    it('hello should be a Hello', ()=> {
        expect(capitalize('hello')).to.equal('Hello')
    })

    it('should throw an error if arg is not a string', () => {
        expect(() => capitalize(123)).to.throw()
    })
    it('should throw an type error if arg is not a string', () => {
        expect(() => capitalize(123)).to.throw(TypeError)
    })
})