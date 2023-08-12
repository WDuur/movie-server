import { Movies } from './db.js';

export const resolvers = {
  Query: {
    movies: () => Movies.findAll(),
  },
};
