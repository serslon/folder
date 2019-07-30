const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

const rootDir = path.join(__dirname, "..");
const buildDir = path.join(rootDir, "build");

const getAllFiles = (dir = rootDir) => {
  const result = [];
  var files = fs.readdirSync(dir);
  for (var i of files) {
    const name = path.join(dir, i);
    if (fs.statSync(name).isDirectory()) {
      result.push({ name: i, type: "dir", child: getAllFiles(name) });
    } else {
      result.push({ name: i, type: "file" });
    }
  }
  return result;
};

app.use(express.static(buildDir));

app.get("/", function(req, res) {
  res.sendFile(path.join(buildDir, "index.html"));
});

app.get("/api", function(req, res) {
  res.send(getAllFiles());
});

app.listen(process.env.PORT || 8080);
