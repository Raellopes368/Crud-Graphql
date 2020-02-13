const bcrypt = require("bcrypt");
const User = require("../models/Users");
const generateToken = require("../../utils/generateToken");

class SessionController {
  async show(name, password) {
    const user = await User.findOne({
      where: { name }
    });
    if (!user) {
      return {
        error: "Usuário não cadastrado"
      };
    }

    const result = await bcrypt.compareSync(password, user.password);
    if (!result) {
      return {
        error: "Senha inválida!"
      };
    }
    const token = generateToken(user.id);

    user.token = token;

    return user;
  }
}

module.exports = new SessionController();
