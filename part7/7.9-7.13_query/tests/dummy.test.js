const { test, describe } = require("node:test");
const assert = require("node:assert");
const listHelper = require("../utils/list_helper");

describe("blogs tests", () => {
  test("dummy returns one", () => {
    const result = listHelper.dummy(listHelper.blogs);
    assert.strictEqual(result, 1);
  });

  test("totalLikes", () => {
    const result = listHelper.totalLikes(listHelper.blogs);
    assert.strictEqual(result, 36);
  });
});

describe("favourite blog", () => {
  test("favouriteBlog", () => {
    const result = listHelper.favouriteBlog(listHelper.blogs);
    assert.strictEqual(result, "5a422b3a1b54a676234d17f9");
  });
});

describe("author with most blogs", () => {
  test("mostBlogs", () => {
    const result = listHelper.mostBlogs(listHelper.blogs);
    assert.strictEqual(result, "Robert C. Martin");
  });
});

describe("author with most likes", () => {
  test("mostLikes", () => {
    const result = listHelper.mostLikes(listHelper.blogs);
    assert.deepStrictEqual(result, { author: "Edsger W. Dijkstra", likes: 17 });
  });
});
