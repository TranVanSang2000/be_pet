var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var cors = require("cors");
require("dotenv").config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const http = require("http").createServer(app);
app.get("/", (req, res) => {
  res.send(
    "<h1>Chào tất cả các bạn đến với api dịch vụ thú cưng của tôi!</h1>",
  );
});
require("./routes/Tag")(app);
require("./routes/schedule")(app);
require("./routes/bill")(app);
require("./routes/TagNew")(app);
require("./routes/New")(app);
require("./routes/User")(app);
require("./routes/Role")(app);
require("./routes/Weight")(app);
require("./routes/Service")(app);
require("./routes/Gallery")(app);
require("./routes/Contact")(app);
require("./routes/Pet")(app);
require("./routes/SocialNetwork")(app);
require("./routes/Login")(app);
require("./routes/ImgPet")(app);
require("./routes/Category")(app);
require("./routes/Product")(app);
require("./routes/TagProduct")(app);
require("./routes/ImageProduct")(app);
require("./routes/Shop")(app);
app.use(function (err, req, res, next) {
  res.status(500).send(err);
});

http.listen(process.env.PORT, () => {
  console.log(
    `Chào mừng bạn đến với Backend http://localhost:${process.env.PORT}`,
  );
});
