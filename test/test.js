let userPrint = '';
console.log = function(userLog) {
  userPrint += `\n${userLog}`;
};
const { assert, expect } = require('chai');
var sinon = require('sinon');
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('./runway.js', 'utf8');

describe('', function () {
  it('', function() {
    let clear
    try {
      clear = require('../runway').clear;
    } catch(e) {
      expect(true, 'Try checking your code again. You likely have a syntax error.').to.equal(false);
    }

    expect(clear, 'Did you declare a `clear` function?').to.be.an.instanceOf(Function);
    
    let load = require('../runway').load;
    let testRegex = /flight\s*[123]{1}\,\s*is\s*cleared\s*for\stakeoff\!/gi;
    let matches;
    let testRunway = load(['flight 1', 'flight 2', 'flight 3', 'flight 4']);

    // Check while loop is running with log statements
    clear(testRunway);
    
    try {
      matches = userPrint.match(testRegex).length;
    } catch (e) {
      expect(3, `Is your while loop logging messages about dequeued flights to the terminal when it runs?`).to.equal(null);
    }
    // Check structure
    let structureOne = function () {
      while(_.isEmpty()) {
        _
      }
    };
    
    let isMatchOne = Structured.match(code, structureOne);
    assert.isOk(isMatchOne, 'Did you use the `Queue` method `.isEmpty()` in your `while` loop condition?');
  });
});
