const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const PORT = 5001;
const cors = require('cors');

app.use(cors({
  origin: "http://localhost:3000",
})
);
app.use(express.json());
app.use("/api/v1/",require('./src/v1/routes'))


//DB接続
try {
  mongoose.connect(process.env.MONGODB_URL);
} catch (err) {
  console.log(err);
}


app.listen(PORT, () => {
  console.log(`サーバー起動中`);
});
