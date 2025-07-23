import "dotenv/config";
import express from "express";
import cors from "cors";
import Route from "./routes/Route.js";

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
  cors({
    origin: "*",
  })
);

app.use(Route)

app.get('/',(req,res)=>{
  res.send("hi from the backend")
})

app.listen(PORT, () => {
  console.log("server running in ", PORT);
});