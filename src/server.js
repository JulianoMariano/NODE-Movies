const express = require("express")

const app = express()

app.get("/message/:id", (request, response) => {
    response.send(`ID da mensagem: ${request.params.id}`);
})

const PORT = 1234
app.listen(PORT, () => console.log(`Server is running on ${PORT}`))