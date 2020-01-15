const main = require("../main.js");
const assert = require ("assert");

context("Tickets function", () => {
  it("should return YES when given the array [25,25,50,50]", () => {
    assert.equal(main.tickets([25,25,50,50]), "YES");
  })

  it("should return NO when given the array [25,100]", () => {
    assert.equal(main.tickets([25,100]), "NO");
  })
})
