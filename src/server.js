const express = require("express")

const { usersRoutes } = require("./routes/users.routes")

const app = express()

app.use(express.json())

const PORT = 1234
app.listen(PORT, () => console.log(`Server is running on ${PORT}`))