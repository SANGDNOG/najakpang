import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const PORT = 8080;

console.log(process.env.COOKIE_SECRET, process.env.DB_URL);

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;

const handleOpen = () => {
  console.log("✅ Connected to DB");
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);
};
const handleError = (error) => console.log("❌ DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);
