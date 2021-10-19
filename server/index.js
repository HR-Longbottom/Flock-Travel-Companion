const app = require("./app.js");
// var http = require('http');
// const https = require('https');
// const fs = require('fs');

// const options = {
//   key: fs.readFileSync('ssl/key.pem'),
//   cert: fs.readFileSync('ssl/cert.pem')
// };

let port = 3005 || process.env.PORT;

// let port = 80 || process.env.PORT;

// let securePort = 443 || process.env.PORT;

// http.createServer(app).listen(port, () => {
//   console.log('http server started')
// });

// https.createServer(options, app).listen(securePort, () => {
//   console.log('Server Listening')
// });

app.listen(port, () => {
  console.log(`Listening..`);
});
