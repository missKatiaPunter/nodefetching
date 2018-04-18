const express = require ("express");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use("/static", express.static("static"));
// app.set("views", "./views");
app.set("view engine", "hbs");


app.get("/api/quiz",function(req, res){

  fetch('https://opentdb.com/api.php?amount=1&category=15&difficulty=easy&type=multiple')
    .then(response => {
      console.log(response.status);
      return response.json();
    })
    .then(function(json){
      console.log(json);
      // res.render('quiz', json);
    })
      .catch(function(error){
        res.status(500).json({ error: 'We failed to fetch the question from the server' });
    });
})

app.listen(8080, function(){
  console.log("Listening to port 8080");
})