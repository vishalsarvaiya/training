const fs = require("fs");
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(express.json());
app.use(cors());
app.get("/createfolder", async (req, res) => {
    const path = "drive/" + req.query.foldername;
    try {
        if (!fs.existsSync(path)) {
            const ans = await fs.mkdirSync(path);
            res.status(200).send({ message: "ok folder created succesfully", ans });
        } else {
            res.status(400).send("folder alredy exist");
        }
    } catch (err) {
        console.log(err);
        res.status(400).send("folder alredy exist");
    }
});
app.get("/createfile", async (req, res) => {
    const path = "drive/" + req.query.filename;
    try {
        if (!fs.existsSync(path)) {
            const ans = await fs.createWriteStream(path);
            res.status(200).send({ message: "File is created", ans });
        } else {
            res.status(400).send("file already exist");
        }
    } catch (err) {
        console.log(err);
        res.status(400).send("there is a problem");
    }
});
app.get("/writefile", (req, res) => {
    const path = "./drive/vishal/vishalsarvaiya.txt";
    const data = req.query.writefile;
    // console.log(data)
    try {
        const ans = fs.writeFileSync(path, data);
        res.status(200).send({ message: "data is inserted", ans });
    } catch (err) {
        console.log(err);
        res.status(400).send("there is a problem");
    }
});
app.get("/appenddata", async (req, res) => {
    const path = "./drive/vishal/vishalsarvaiya.txt";
    const data = req.query.appenddata;
    console.log(data);
    try {
        if (!fs.existsSync(path)) {
            console.log("file not exist");
        } else {
            const ans = await fs.appendFileSync(path, data);
            res.status(200).send({ message: "data is appended", ans });
        }
    } catch (err) {
        console.log(err);
        res.status(400).send("there is a problem");
    }
});
app.get("/readfile", async (req, res) => {
  const path = "drive/" + req.query.readfilename;
  try {
    const ans = await fs.readFile(
      path,
      { encoding: "utf8", flag: "r" },
      (err, data) => {
        if (err) throw err;
        res.json(data);
        console.log(data);
        
      }
    );
  } catch (err) {
    console.log(err);
    res.status(400).send("there is a problem");
  }
});

app.get("/deletefile", async (req, res) => {
    const path = "drive/vishal/" + req.query.deletefile;
    console.log(path);
    try {
        const ans = await fs.unlink(path, (err) => {
            console.log(err);
        });
        res.status(200).send({ message: "file is deleted", ans });
    } catch (err) {
        console.log(err);
        res.status(400).send("there is a problem");
    }
});
app.get("/display", async (req, res) => {
    const path = req.query.foldername;
    try {
        fs.readdir(path, (err, file) => {
            if (err) {
                res.send(err);
            }
            res.send(file);
            console.log(file);
        });
    } catch (err) {
        console.log(err);
    }
});
app.listen(8000, () => {
    console.log("server is running");
});
