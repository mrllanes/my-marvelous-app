const path = require("path");
const express = require("express");
const session = require("express-session");
const routes = require("./routes");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const cookieParser = require("cookie-parser");

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
        useMongoClient: true,
    }
);

mongoose.Promise = global.Promise;
const db = mongoose.connection;

const sess = {
    secret: "Secret password",
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: db }),
};

app.use(cookieParser());
app.use(session(sess));

// API routes
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
