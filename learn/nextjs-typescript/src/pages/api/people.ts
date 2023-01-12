import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import { open } from 'sqlite';
import jwt from 'jsonwebtoken';
import { SECRET_KEY_DONENV } from './secret';
const { Database } = require('sqlite3');

export const authenticated = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  jwt.verify(req.cookies.auth!, SECRET_KEY_DONENV, async function(err, decoded) {
    if (!err && decoded) {
      return await fn(req, res);
    }

    res.status(401).json({ message: 'Sorry you are not authenticated' });
  });
};

export default authenticated(async function getPeople(req:NextApiRequest, res:NextApiResponse) {
  const db = await open({
    filename: 'mydb.sqlite',
    driver: Database
  });
  const people = await db.all('select id, email, name from person');

  res.json(people);
});