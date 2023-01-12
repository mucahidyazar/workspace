const { open } = require('sqlite');
const { Database } = require('sqlite3');

async function setup () {
  const db = await open({
    filename: 'mydb.sqlite',
    driver: Database
  });
  await db.migrate({
    force: 'last'
  });

  const people = await db.all('SELECT * from person');
  console.log('ALL PEOPLE', JSON.stringify(people, null, 2));
  
  const vehicles = await db.all('SELECT * from vehicle');
  console.log('ALL VEHICLES', JSON.stringify(vehicles, null, 2));
}

setup();