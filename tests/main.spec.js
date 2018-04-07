import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main';

describe('Calc', () => {

  describe('Smoke tests', () =>{

    it('Should exist the method "sum"', () =>{
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('Should exist the method "sub"', () =>{
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it('Should exist the method "mult"', () =>{
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });

    it('Should exist the method "div"', () =>{
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });
  });

  describe('Sum', function(){
    it('should return 4 when sum(2,2)', () =>{
      expect(sum(2,2)).to.be.equal(4);
    });
  });

  describe('Sub', () =>{
    it('should return 1 when sub(3,2)', function(){
      expect(sub(3,2)).to.be.equal(1);
    });
  });

  describe('Mult', () =>{
    it('should return 14 when mult(7,2)', function(){
      expect(mult(7,2)).to.be.equal(14);
    });
  });

  describe('Div', () =>{
    it('Should return 5 when sum(10,2)', () =>{
      expect(div(10,2)).to.be.equal(5);
    });

    it('Should return "We can\'t division by 0" when div(2,0)', () =>{
      expect(div(2,0)).to.be.equal(`We can't division by 0`);
    });
  });
});
