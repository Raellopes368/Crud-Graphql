const { Model, DataTypes } = require("sequelize");

class Users extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        cpf: DataTypes.STRING,
        contacts: DataTypes.STRING,
        address: DataTypes.STRING
      },
      {
        sequelize
      }
    );
  }
}

module.exports = Users;
