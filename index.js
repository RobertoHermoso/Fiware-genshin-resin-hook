// Require express and body-parser
const express = require("express");
const bodyParser = require("body-parser");

const resinService = require("./services/resinService");

// Initialize express and define a port
const app = express();
const PORT = process.env.PORT || 3000;

// Tell express to use body-parser's JSON parsing
app.use(bodyParser.json());

app.post("/hook", (req, res) => {
  console.log(req.body);
  resinService.checkResin(req.body);
  res.status(200).end(); // Responding is important
});

// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
