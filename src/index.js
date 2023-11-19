const http = require("http");
const getUsers = require("./modules/users");
const hostname = "127.0.0.1";
const port = 3003;

const server = http.createServer((request, res) => {
const url = new URL(request.url, `http://${hostname}`);
console.log(url);
console.log(url.searchParams);
const query = url.searchParams;

  if (query.has("hello")) {
    const name = query.get("hello");
    if (name) {
      res.statusCode = 200;
      rese.header = "Content-Type: text/plain";
      res.write(`Hello,${name}`);
      res.end();
      return;
    }
    res.statusCode = 400;
    res.header = "Content-Type: text/plain";
    res.write("Enter a name");
    res.end();
  } else if (request.url === "/users") {
    res.status = 200;
    res.header = "Content-Type: application/json";
    res.write(getUsers());
    res.end();
  } else if (request.url === "/") {
    res.statusCode = 200;
    res.header = "Content-Type: text/plain";
    res.write("Hello world");
    res.end();
  } else {
    res.statusCode = 500;
    res.header = "Content-Type: text/plain";
    res.write("Not Found");
    res.end();
  }
});
server.listen(port, hostname, () => {
  console.log(`Сервер запущен по адресу http://${hostname}:${port}/`);
});
