const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());




// Home route
app.get("/", (req, res) => {
    res.send("Hello");
});



// Start server
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});