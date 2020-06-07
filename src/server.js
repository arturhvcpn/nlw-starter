const express = require("express");

const server = express();

server.use(express.static("public"));

server.get('/', (require,response) =>{
  console.log("Server Started in port 3000 🟢");
  response.sendFile(__dirname + "/views/index.html");
});

server.get('/create-point', (require,response) =>{
  response.sendFile(__dirname + "/views/create-point.html");
});

server.get('/search-results', (require,response) =>{
  response.sendFile(__dirname + "/views/search-results.html");
});
server.listen(3000);
