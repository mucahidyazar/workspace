import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
import { authenticated } from './people';
const { Database } = require('sqlite3');

export default authenticated(async function getAllVehicles(req:NextApiRequest, res:NextApiResponse) {
  const db = await open({
    filename: 'mydb.sqlite',
    driver: Database
  });
  const vehicles = await db.all('select * from vehicle');

  if(req.method !== 'GET') {
    res.status(500).json({ message: 'sorry we only accept GET request' });
  }
  res.json(vehicles);
})