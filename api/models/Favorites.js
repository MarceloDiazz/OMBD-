const S = require("sequelize");
const db = require("../db");

class Favorites extends S.Model {}

Favorites.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    img: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "favorites" }
);

module.exports = Favorites;
