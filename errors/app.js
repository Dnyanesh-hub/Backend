const express = require("express");
const app = express();
const port = 8080;
const ExpressError = require("./ExpressError");

const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        return next();
    }
    throw new ExpressError(401, "ACCESS DENIED!");
};

app.use("/random", checkToken, (req, res, next) => {
    console.log("I am only for the random page");
    next();
});

app.get("/err", (req, res) => {
    abcd = abcd;
});
app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Acsess to admin is forbidden")
});

app.get("/api", checkToken ,(req, res) => {
    res.send("data");
});

app.get("/", (req, res) => {
    res.send("HI i am root");
});

app.get("/random", (req, res) => {
    res.send("This is a random Page");
});

// 404 handler
app.use((req, res) => {
    res.status(404).send("page not found!");
});

// error handler (ALWAYS LAST)
app.use((err, req, res, next) => {
    console.log("---------ERROR------------");
    let { status = 500, message = "Something went wrong!" } = err;
    res.status(status).send(message);
});

app.listen(port, () => {
    console.log(`server is listening to the port ${port}`);
});
