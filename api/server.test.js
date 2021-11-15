const request = require("supertest");
const server = require("./server");
const db = require("../data/db-config");

test("[0] sanity", () => {
  expect(true).toBe(true);
})