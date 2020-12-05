const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/task_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected');
});

const User = mongoose.model('User', {
  name: {
    type: String
  },
  age: {
    type: Number
  }
});

const Task = mongoose.model('Task', {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
});

const me = new User({
  name: 'Greg',
  age: 33
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch((err) => console.log(err));

const newTask = new Task({
  description: 'Phone to the doctor',
  completed: false
});

newTask
  .save()
  .then((data) => console.log(data))
  .catch((err) => console.log('Error:', err));
