const mongoose = require("mongoose");
const supertest = require("supertest");
const Content = require("./models");
const app = require("../app");
const startDB = require("./db/connect");

require("dotenv").config();
startDB();
describe("Create Content", () => {
  it("should create a new post", async () => {
    const res = await supertest(app).post("/api/content").send({
      text: "Giddem!!!!!!!",
      expiration: 3,
    });
    expect(res.statusCode).toBe(201);
  });
});

describe("Fetch all Content", () => {
  it("should fetch all posts", async () => {
    const data = {
      text: "Politics in Africa",
      expiration: 3,
    };
    const post = await supertest(app).post("/api/content").send(data);
    const res = await supertest(app).get("/api/content");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.data)).toBeTruthy();
  });
});

describe("Get specific content", () => {
  it("should get post by shortened url", async () => {
    const data = {
      text: "Politics in Africa",
      expiration: 3,
    };
    const post = await supertest(app).post("/api/content").send(data);

    const res = await supertest(app).get(`/api/content/${post.shortenedUrl}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.data.title).toBe(data.title);
  });
});
