const clientRoutes = require("./routes/clientRoute");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", clientRoutes);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    res.send("Error Connecting");
  } else {
    console.log(`Server Work: http://localhost:${port}`);
  }
});
