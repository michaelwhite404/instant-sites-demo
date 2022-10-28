const express = require("express");
const path = require("path");
const morgan = require("morgan");

const hvacRouter = require("./routes/hvacRoutes");
const landscapingRouter = require("./routes/landscapingRoutes");
const apiRouter = require("./routes/apiRoutes");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Serving static files
app.use(express.static(path.join(__dirname, "public")));

// Body Parser
app.use(express.json({ limit: "10kb" }));

app.use(morgan("dev"));

// Trailing Slash
app.use(function (req, res, next) {
  if (req.path.substr(-1) == "/" && req.path.length > 1) {
    let query = req.url.slice(req.path.length);
    res.redirect(301, req.path.slice(0, -1) + query);
  } else {
    next();
  }
});

app.use("/api/sites", apiRouter);
app.use("/hvac", hvacRouter);
app.use("/landscaping", landscapingRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(path.resolve(__dirname, "../client/build"))));
  app.get("*", (_, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
  });
} else {
  app.use(express.static(path.join(__dirname, "../public")));
}

app.all("*", (req, _, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;
