import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
const { Database } = require('sqlite3');

export default async function getAllVehiclesByPersonId(req:NextApiRequest, res:NextApiResponse) {
  const db = await open({
    filename: 'mydb.sqlite',
    driver: Database
  });
  //.all olursa ARRAY olarak doner .get ile OBJECT olarak doner
  const vehicles = await db.all('select * from vehicle where ownerId = ?', [req.query.id]);
  res.json(vehicles);
}