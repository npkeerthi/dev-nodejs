const exp = require("express");
const bodyparse = require("body-parser");

const app = exp();
console.log("hhho");
app.get("/", (req, res) => res.sendfile("d.html"));
// app.get("/events", (req, res) => res.send("adv happy newyr"));
// app.get("/shop", function (request, response) {
//   response.send("Sale on Jan 1");
// });

app.use(bodyparse.urlencoded({ extended: true }));
//req is carryingg the encoded payload and there exists body which can be used

app.post("/d.html", function (req, res) {
  var n1 = Number(req.body.n1);
  var n2 = Number(req.body.n2);
  var result = n1 + n2;

  res.send("result: " + result);
});
app.listen(8080, () => console.log("server port: 8080  is running.."));
// app.listen(8080, function () {
//   console.log("8080 server port is running..");
// });
