const express = require("express");
const { ApolloServer} = require("apollo-server-express");
const app = express();
var cors = require("cors");
app.use(cors());

const schema = require('./schema/schema');

const server = new ApolloServer(schema);
server.applyMiddleware({ app });

app.use('/assets', express.static('assets'));
app.use('/app', express.static('app'));

app.listen({ port: process.env.PORT || 3020 }, () =>
  console.log(`🚀 Server ready `)
);


