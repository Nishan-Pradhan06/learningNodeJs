const express = require("express") // require
const app = express()//storing it in app

app.get('/', (req, res) => {
    res.send("Home Page")
})

app.get("/about", (req, res) => {
    res.send("about page")
}
)





//port number  -> room number for certain time
app.listen(3000, function () {
    console.log(
        "Node js Projest has started on port 3000 "
    )
})