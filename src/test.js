const mongoose = require("mongoose");
const supertest = require("supertest");
const Content = require("./models");
require("dotenv").config();

it("Testing to see if Jest works", () => {
  expect(1).toBe(1);
});

beforeEach((done) => {
  mongoose.connect(
    process.env.ATLAS_DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => done()
  );
});

afterEach((done) => {
  mongoose.connection.db.dropDatabase(() => {
    mongoose.connection.close(() => done());
  });
});

test("Add Content", async () => {
  const content = await Content.create({
    title: "The Terminator",
    text: "Giddem!!!!!!!",
    expiration: 3,
  });

  await supertest(app)
    .get("/api/content")
    .expect(201)
    .then((response) => {
      // Check type and length
      //expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body.length).toEqual(1);

      // Check data
      console.log(response.body);
      expect(response.body[0].data.title).toBe(content.title);
      // expect(response.body[0].title).toBe(post.title);
      // expect(response.body[0].content).toBe(post.content);
    });
});
