require("dotenv").config();
const express = require("express");
// const cors = require("cors");
const app = express();
// app.use(cors());
const warehouseRoutes = require("./routes/warehouseRoute");
const inventoryRoutes = require("./routes/inventoryRoute");

app.use("/warehouses", warehouseRoutes);
app.use("/inventories", inventoryRoutes);

//It can be deleted after testing is done
app.get("/", (req, res) => {
  res.send("Welcome to Colwood ❤️");
});

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`🍒 Server running at http://localhost:${PORT}`);
});
