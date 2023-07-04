const express = require("express");
const app = express();

// database
const connectDB = require("./db/connect");

//routers
const productRoute = require("./routes/productsRoutes");
const authenticationRoutes = require("./routes/authentication");

const port = process.env.PORT || 4500;

app.use(express.json());
app.use("/", productRoute)
app.use("/", authenticationRoutes);

const main = async () => {
    try {
        await connectDB();
        app.listen(port, () => {
            console.log("Server is listening on port " + port + "....");  
        });  
    } catch (error) {
        console.log("main error" + error);
    }
}

main();