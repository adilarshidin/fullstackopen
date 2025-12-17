const supertest = require("supertest");
const mongoose = require("mongoose");
const assert = require("node:assert");
const { describe, test, after, beforeEach } = require("node:test");

const listHelper = require("../utils/list_helper");
const User = require("../models/user");
const app = require("../app");

const api = supertest(app);

beforeEach(async () => {
  await User.deleteMany({});
});

describe("user creation", async () => {
  test("valid username and password", async () => {
    await api
      .post("/api/users")
      .send(listHelper.newUser)
      .expect(201)
      .expect("Content-Type", /application\/json/);
  });

  test("invalid username", async () => {
    await api
      .post("/api/users")
      .send(listHelper.newUser)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    const response = await api
      .post("/api/users")
      .send(listHelper.newUser)
      .expect(200)
      .expect("Content-Type", /application\/json/);
    const body = await response.body;

    assert.ok(!body.result);
    assert.strictEqual(body.message, "Such username already exists.");
  });

  test("invalid password", async () => {
    const response = await api
      .post("/api/users")
      .send(listHelper.newUserInvalidPassword)
      .expect(400)
      .expect("Content-Type", /application\/json/);
    const body = await response.body;

    assert.ok(!body.result);
    assert.strictEqual(
      body.message,
      "Password must be 3 characters or longer.",
    );
  });
});

after(async () => {
  await mongoose.connection.close();
});
