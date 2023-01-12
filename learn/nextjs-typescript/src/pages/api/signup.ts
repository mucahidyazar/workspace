import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import jsw from 'jsonwebtoken';
import { open } from 'sqlite';
const sqlite3 = require('sqlite3').verbose();

export default async function signUp(req:NextApiRequest, res:NextApiResponse) {
  const db = await open({
    filename: 'mydb.sqlite',
    driver: sqlite3.Database
  });

  if(req.method === 'POST') {//Statementdaki ? isaretli degerler ve result daki degerlerle sirasiyla eslesecek
    bcrypt.hash(req.body.password, 10, async (err, hash) => {

      const willUpdate = 'INSERT INTO person (name, email, password) values (?, ?, ?)';
      await db.run(willUpdate, [req.body.name, req.body.email, hash]);

      
      //.all olursa ARRAY olarak doner .get ile OBJECT olarak doner
      const person = await db.all('select * from person');
      res.json(person);

      db.close();
      
    })
  } else {
    res.status(405).json({messaage: 'We only support POST'});
  }
}

