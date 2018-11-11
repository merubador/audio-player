const Express = require("express");
const bodyParser = require("body-parser");
const Cors = require("cors");

const app = Express();
const tracksDB = require("./tracks");

app.set("port", process.env.PORT || 8080);

app.use(
  bodyParser.urlencoded({
    extended: true
  }),
  Cors()
);

app.use(bodyParser.json());

app.get("/api/tracks", (req, res) => {
  res.send(tracksDB);
});

app.listen(app.get("port"), () => {
  console.log(`Listening on port ${app.get("port")}, pid ${process.pid}`);
});
