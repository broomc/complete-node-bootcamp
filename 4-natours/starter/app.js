const express = require('express');

const app = express();
app.get('/', (req, res) => {
  //send text from server
  //res.status(200).send('hello from the server side!');
  //send json
  res
    .status(200)
    .json({ message: 'Hello from the server side!', app: 'Natours' });
});

app.post('/', (req, res) => {
  res.send('You can post to this endpoint...');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}....`);
});
