import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
const sqlite3 = require('sqlite3').verbose();

export default async function getPersonById(req:NextApiRequest, res:NextApiResponse) {
  const db = await open({
    filename: 'mydb.sqlite',
    driver: sqlite3.Database
  });

  if(req.method === 'PUT') {//Statementdaki ? isaretli degerler ve result daki degerlerle sirasiyla eslesecek
    const willUpdate = 'UPDATE person SET name = ?, email = ? where id = ?';
    await db.run(willUpdate, [req.body.name, req.body.email, req.query.id]);
    db.close();
  }

  //.all olursa ARRAY olarak doner .get ile OBJECT olarak doner
  const person = await db.get('select * from person where id = ?', [req.query.id]);
  res.json(person);
}

