const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use('/users', userRouter);
app.use('/tasks', taskRouter);

app.get('/', (req, res) => {
  res.send('HomePage');
});

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
