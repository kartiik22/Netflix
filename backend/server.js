const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const showRoutes = require("./routes/showRoutes");
const adminRoutes = require("./routes/adminRoutes");

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/shows", showRoutes);           // Public
app.use("/api/admin", adminRoutes);          // Admin-only

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
