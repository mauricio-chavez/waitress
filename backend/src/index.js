import { ApolloServer, gql } from "apollo-server";

const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    year: 1998
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton",
    year: 1990
  },
  {
    title: "A Clockwork Orange",
    author: "Anthony Burgess",
    year: 1962
  }
];


const typeDefs = gql`
  type Book {
    title: String
    author: String
    year: Int
  }

  type Query {
    books: [Book]
  }
`;


const resolvers = {
  Query: {
    books: () => books
  }
};

const server = new ApolloServer({ typeDefs, resolvers});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
