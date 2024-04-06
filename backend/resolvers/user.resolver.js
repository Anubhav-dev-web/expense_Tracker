import { users } from "../dummyData/data.js";

const userResolver = {
  Query: {
    users: ({ req, res }) => {
      return users;
    },
    user: (_, { userId }, { req, res }) => {},
  },
  Mutation: {},
};

export default userResolver;
