import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import cookie from 'cookie';
import jwt from 'jsonwebtoken';
import { open } from 'sqlite';
import { SECRET_KEY_DONENV } from './secret';
const sqlite3 = require('sqlite3').verbose();

export default async function login(req:NextApiRequest, res:NextApiResponse) {
  const db = await open({
    filename: 'mydb.sqlite',
    driver: sqlite3.Database
  });

  if(req.method === 'POST') {//Statementdaki ? isaretli degerler ve result daki degerlerle sirasiyla eslesecek

    const person = await db.get('select * from person where email = ?', [req.body.email]);

    bcrypt.compare(req.body.password, person.password, async (err, result) => {
      if(!err && result) {
        const claims = {
          sub: person.id,
          name: person.name
        }
        const token = jwt.sign(claims, SECRET_KEY_DONENV, { expiresIn: '1h' });

        res.setHeader('Set-Cookie', cookie.serialize('auth', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          sameSite: 'strict',
          maxAge: 3600, //1 hours
          path: '/'
        }));
        res.json({message: 'Welcome back to the app' });
      } else {
        res.json({message: 'Ups something went wrong!'});
      }
    });
  } else {
    res.status(405).json({messaage: 'We only support POST'});
  }
}

