require("dotenv").config();
const server = require("./server");
const { port } = require("./config/server");
require("./database");

server.start(
  {
    port
  },
  () => console.log(`Server start on port ${port}`)
);
