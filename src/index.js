const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');

const app = express();
const port = process.env.port || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('HomePage');
});

app.post('/users', (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => res.status(400).send(err));
});

app.post('/tasks', (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => res.status(400).send(err));
});

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
