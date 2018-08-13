let express = require('express');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let exphbs = require('express-handlebars')
let sequelize = require('sequelize');


let app = express();
let PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(methodOverride('_method'));

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

let routes = require('./controllers/routes.js');
app.use('/', routes);

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});