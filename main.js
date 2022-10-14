const express = require("express");
const app = express();
const PORT = 3001;
const bodyParser = require("body-parser");
const routes = require("./routes/index");
const connectDB = require ('./database/db')




app.set('view engine', 'pug');


app.use(bodyParser.json());
app.use(routes);


connectDB().then(() => {
    app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});
});
