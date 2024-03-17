const AppError = require("../utils/AppError")

const sqliteConnection = require("../database/sqlite")

class UsersController {
    async create(request, response ) {
        const { name, email, password } = request.body;

        const database = await sqliteConnection();
        const checkUserExist = await database
            .get("SELECT * FROM users WHERE email = (?)", [email])
        if(checkUserExist) {
            throw new AppError("Este e-mail já está em uso, por favor, insira um email válido")
        }return response.status(201).json()
    }
}

module.exports = UsersController