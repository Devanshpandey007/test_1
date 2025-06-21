const express = require('express');
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const app = express();

require ('dotenv').config();
app.use(express.json());

app.set("prisma", prisma);


app.use("/auth", require("./routes/auth"));
app.use("/category", require("./routes/category"));
app.use("/category", require("./routes/service"));


//let's just use 3000 because it is already free

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
})