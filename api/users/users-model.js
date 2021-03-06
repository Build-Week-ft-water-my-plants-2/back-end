const db = require("../../data/db-config");

const getAll = () => db("users");
const getBy = filter => db("users").where(filter);
const getById = id => db("users").where({ id }).first();
const insert = user => db("users").insert(user).then(([id]) => {return {id, ...user}});
const update = user => db("users").where({ id: user.id }).update(user).then(() => user);

module.exports = {
  getAll,
  getBy,
  getById,
  insert,
  update
};