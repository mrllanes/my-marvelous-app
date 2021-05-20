import path from "path";
import express from "express";
import mongoose from "mongoose";
import routes from "./routes/posts.js";

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Mongo DB info
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/marvelousapp",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }
);

// mongoose.Promise = global.Promise;
// const db = mongoose.connection;

app.use("/api", routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
