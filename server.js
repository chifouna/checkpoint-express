let express = require("express");
let app = express();
let path = require("path");

app.use(express.static(__dirname + '/public'));



app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname + '/contact.html'));
});

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname + '/services.html'));
});




const port = process.env.Port || 8000;
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`the service is running on http://localhost:${port}`);
});
