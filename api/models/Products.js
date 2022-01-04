const S = require("sequelize");
const db = require("../db");

class Products extends S.Model {}

Products.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    img: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "products" }
);

module.exports = Products;
