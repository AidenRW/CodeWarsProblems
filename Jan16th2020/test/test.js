const main = require("../main.js");
const assert = require("assert");

context("the add function", () => {
  it("should return 5 when given [[10,0],[3,5],[5,8]]", () => {
    assert.equal(main.number([[10,0],[3,5],[5,8]]), 5);
  })

  it("should return 17 when given [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]", () => {
    assert.equal(main.number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]), 17);
  })

  it("should return 21 when given [[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]", () => {
    assert.equal(main.number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]), 21);
  })
})
