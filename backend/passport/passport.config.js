import passport from "passport";
import bcrypt from "bcryptjs";

import User from "../models/user.mode.js";
import { GraphQLLocalStrategy } from "graphql-passport";

export const configurePassport = () => {
  passport.serializeUser((user, done) => {
    console.log("serializing user");
    done(null, user._id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });

  passport.use(
    new GraphQLLocalStrategy(async (username, password, done) => {
      try {
        const user = await User.findOne({ username });
        if (!user) {
          throw new Error("Invalid username or password");
        }
        const validPassword = bcrypt.compare(password, user.password);
        if (!validPassword) {
          throw new Error("Invalid username or password");
        }
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    })
  );
};
