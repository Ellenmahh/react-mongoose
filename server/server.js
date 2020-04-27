const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/keys.config.js');
const TaskRoutes = require('./routes/Task');
//const cors = require('cors');

const app = express();

mongoose.connect(config.mongodbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('DB Connected!'))
.catch(err => {
console.log('DB Connection Error:', err);
});

mongoose.set('useFindAndModify', false);

app.use(bodyParser.json());
//app.use(cors());

app.use('/api/tasks', TaskRoutes);

const port = process.env.PORT || 3001;

app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
