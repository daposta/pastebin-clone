const mongoose = require("mongoose");
const supertest = require("supertest");
const Content = require("./models");
const app = require("../app");
require("dotenv").config();

describe("Create Content", () => {
  beforeEach(() => {
    mongoose.connect(process.env.ATLAS_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  beforeEach(() => {
    jest.setTimeout(10000);
  });

  afterEach(() => {
    mongoose.connection.dropDatabase(() => {
      mongoose.connection.close();
    });
  });
  it("should create a new post", async () => {
    const res = await supertest(app).post("/api/content").send({
      title: "The Terminator Reloaded",
      text: "Giddem!!!!!!!",
      expiration: 3,
    });
    expect(res.statusCode).toBe(201);
  });

  it("should fetch all posts", async () => {
    const res = await supertest(app).get("/api/content");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.data)).toBeTruthy();
  });
});

// describe("Post Endpoints", () => {
//   it("should fetch content", async () => {

//     const post = await supertest(app).get("/api/content").send({
//       title: "The Terminator Reloaded",
//       text: "Giddem!!!!!!!",
//       expiration: 3,
//     });
//     const res = await supertest(app).get("/api/content");
//     expect(res.statusCode).toBe(200);
//   });

// });
// test("GET All Content", async () => {

//   await supertest(app)
//     .get("/api/content")
//     .expect(200)
//     .then((response) => {
//       // Check type and length
//       expect(Array.isArray(response.body)).toBeTruthy();
//       expect(response.body.length).toEqual(1);

//       // Check data
//       expect(response.body[0]._id).toBe(post.id);
//       expect(response.body[0].title).toBe(post.title);
//       expect(response.body[0].content).toBe(post.content);
//     });
// });
