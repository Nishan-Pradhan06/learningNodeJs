const express = require("express") // require
const app = express()//storing it in app



app.set("view engine", "ejs")


app.get('/', (req, res) => {
    // res.send("<h1>Home Page</h1>")
    res.render("home")
})





//port number  -> room number for certain time
app.listen(3000, function () {
    console.log(
        "Node js Projest has started on port 3000 "
    )
})