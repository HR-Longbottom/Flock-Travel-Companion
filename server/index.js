const app = require("./app.js");

let port = 3005 || process.env.PORT;

app.listen(port, () => {
  console.log(`Listening..`);
});
