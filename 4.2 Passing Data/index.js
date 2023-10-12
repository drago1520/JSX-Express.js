import express from "express";
import bodyParser from "body-parser";
import $ from "jquery";

const app = express();
const port = 3000;

function length(fName, lName) {
  let length = fName.length + lName.length;
  return length;
}


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const count = req.session.submitted ? 0 : undefined;

  res.render("index.ejs", {
    count,
  });
});
app.post("/submit", (req, res) => {
  // Calculate the "count" based on the form data
  const count = length(req.body.fName, req.body.lName);
  res.render("index.ejs", {
    count,
  });
  
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
