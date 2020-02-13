const bcrypt = require("bcrypt");
const Users = require("../models/Users");
const generateToken = require("../../utils/generateToken");

class UsersControllers {
  async store(data) {
    const { name, email, cpf, contacts, address } = data;
    let { password } = data;
    const hash = await bcrypt.hashSync(password, 8);
    password = hash;
    const user = await Users.create({
      name,
      email,
      password,
      cpf,
      contacts,
      address
    });
    const token = generateToken(user.id);
    user.token = token;
    return user;
  }
  async index() {
    const users = await Users.findAll();
    return users;
  }
  async show(id) {
    const user = await Users.findByPk(id);
    return user;
  }
  async delete(id) {
    await Users.destroy({
      where: { id }
    });

    return {
      status: true
    };
  }
  async update(data) {
    await Users.update(data, {
      where: {
        id: data.id
      }
    });
    return data;
  }
}

module.exports = new UsersControllers();
