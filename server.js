const express = require('express');
const path = require('path');
const app = express();

const HTTP_PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/api/users', (req, res) => {
  res.send({ message: 'fetch all users' });
});

app.post('/api/users', (req, res) => {
  res.send({ message: 'add a user' });
});

app.get('/api/users/:userId', (req, res) => {
  res.send({ message: `get user with Id: ${req.params.userId}` });
});

app.put('/api/users/:userId', (req, res) => {
  res.send({ message: `update User with Id: ${req.params.userId}` });
});

app.delete('/api/users/:userId', (req, res) => {
  res.send({ message: `delete User with Id: ${req.params.userId}` });
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, () => {
  console.log(`Express http server listening on: ${HTTP_PORT}`);
});