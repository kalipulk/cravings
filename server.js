var express = require("express");
var db = require("./models/index.js");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// var routes = require("./controllers/controller.js");

app.use(routes);

app.get("/", function(req, res){
    db.cravings.findAll({raw:true}).then(function(data){
        var hbsobject = {
            cravings: data
        }
        console.log("this is cravings", data);
        res.render("index", hbsobject)
    })
})

app.post("/create", function(req, res){
    console.log("hit the route", req.body);
    db.cravings.create({
        name: req.body.name,
        devoured: false
    }).then(function(newCrave){
        console.log(newCrave)
        res.json(newCrave);
    })
})

app.delete("/:id", function(req, res) {
    db.cravings.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(hbsobject) {
        res.json(hbsobject);
      });
  });

// Start our server so that it can begin listening to client requests.
db.sequelize.sync().then(function(){
 app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});   
})

