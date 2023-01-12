import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
const { Database } = require('sqlite3');

export default async function getAllVehicleById(req:NextApiRequest, res:NextApiResponse) {
  const db = await open({
    filename: 'mydb.sqlite',
    driver: Database
  });
  //.all olursa ARRAY olarak doner .get ile OBJECT olarak doner
  const vehicle = await db.get('select * from vehicle where id = ?', [req.query.id]);
  res.json(vehicle);
}