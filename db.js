import { Database } from 'fakebase';

const db = new Database('./data');

export const Movies = db.table('movies');