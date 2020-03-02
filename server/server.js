const express = require('express');
const app = express();
const parser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(cors());
app.use(parser.json());

MongoClient.connect('mongodb://localhost:27017')
.then((client)=> {
  const db = client.db('yoga_locations');
  const manageCollection = db.collection('manage');
  const manageRouter = createRouter(manageCollection);
  app.use('/api/manage', manageRouter);
})
.catch(console.err);

app.listen(3000, function () {
  console.log(`listening on port ${ this.address().port}`);
});
