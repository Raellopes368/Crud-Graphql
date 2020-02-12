const { GraphQLServer } = require("graphql-yoga");
const { resolve } = require("path");
const resolvers = require("./app/resolver/Resolver");

class App {
  constructor() {
    this.server = new GraphQLServer({
      typeDefs: resolve(__dirname, "app", "graphql", "schema.graphql"),
      resolvers
    });
  }
}

module.exports = new App().server;
