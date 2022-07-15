const express = require('express')
const cors = require("cors")
const jsonServer = require("json-server");
const generatingDB = require("./blog-json-server");
const port = process.env.PORT || 5000;

const app = express();
const db = generatingDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/',(req,res)=>{
    res.send("hello world")
})
// app.use("/api/users", require("./routes/userRoutes"));
app.use("/api", jsonServer.defaults(), jsonServer.router(db));


app.listen(port, () => console.log(`Server started on port ${port}`));