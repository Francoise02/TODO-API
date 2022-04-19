const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes/dojos")

const app = express();

app.use(express.json());

const username = "Francoise";
const password = "12345";
const cluster = "cluster0.ov7s3";
const dbname = "Assignment1";

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
      return res.status(200).json({});
    }
    next();
  });
  
  app.use("/dojos", Router);
  
  app.use((req, res, next) => {
    const error = Error("Not found");
    res.statusCode = 404;
    res.send({ error: error.message });
  });
