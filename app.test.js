const request = require("supertest");
const app = require("./app"); // Import the Express app

describe("Express API Tests", () => {
  test('GET / should return { message: "Jenkins sample node app" }', async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "Jenkins sample node app" });
  });
});
