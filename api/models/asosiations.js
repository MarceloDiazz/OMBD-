const Products = require("./Products");
const User = require("./User")

User.belongsToMany(Products, {
    as: "User",
    foreignKey: "UserId",
    through: "Favorites",
  });