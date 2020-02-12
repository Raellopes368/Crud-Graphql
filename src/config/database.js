require("dotenv").config();
module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: process.env.NAME,
  password: process.env.PASS,
  database: "simple",
  define: {
    timestamps: true,
    underscored: true
  }
};
