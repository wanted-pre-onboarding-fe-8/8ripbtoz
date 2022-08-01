const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./public/database/hotels.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);

router.render = (req, res) => {
  if (req.method === 'GET') {
    console.log();
    res.jsonp(res.locals.data);
  }
};

server.use(router);
server.listen(8000, () => {
  console.log('JSON Server is running');
});
