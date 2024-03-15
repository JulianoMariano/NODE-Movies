const { Router } = require("express")

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router()

function myMiddleware(request, response, next) {
    console.log("Você passou pelo MIDDLEWARE")

    if(!request.body.isAdmin){
       return response.json({ message: "Usuário não tem permissão. Contate o administrador" }) 
    }

    next()
}

const usersController = new UsersController()

usersRoutes.post("/",myMiddleware, usersController.create);

module.exports = usersRoutes;