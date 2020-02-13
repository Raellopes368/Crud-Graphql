const { AuthenticationError } = require("apollo-server-core");
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

module.exports = async (resolve, root, args, context, info) => {
  if (info.fieldName !== "login") {
    const auth = context.request.get("Authorization");
    const parts = auth.split(" ");
    if (parts.length !== 2) {
      return new AuthenticationError("Token mal formatado");
    }
    const [schema, token] = parts;

    console.log(token);
    if (!schema.match(/^Bearer$/g)) {
      return new AuthenticationError("Formato de token inválido");
    }

    jwt.verify(token, secretKey);

    const result = await resolve(root, args, context, info);
    return result;
  }

  const result = await resolve(root, args, context, info);
  return result;
};
