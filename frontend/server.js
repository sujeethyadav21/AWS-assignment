const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req, res) => {
  res.send(`
    <form action="/submit" method="post">
      <input type="text" name="name" placeholder="Enter name" required />
      <input type="number" name="age" placeholder="Enter age" required />
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post("/submit", async (req, res) => {
  try {
    // We convert the data to URL-encoded format so Flask can read it via request.form
    const params = new URLSearchParams();
    params.append('name', req.body.name);
    params.append('age', req.body.age);

    const response = await axios.post("http://backend:5000/process", params);
    res.send(response.data);
  } catch (error) {
    res.send("Error communicating with backend");
  }
});

app.listen(3000, () => console.log("Frontend running on port 3000"));