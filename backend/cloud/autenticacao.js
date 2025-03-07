// cloud/autenticacao.js

// backend/cloud/autenticacao.js

// Função para cadastrar um novo usuário
Parse.Cloud.define("cadastrarUsuario", async (request) => {
  const username = request.params.username;
  const email = request.params.email;
  const password = request.params.password;

  const user = new Parse.User();
  user.setUsername(username);
  user.setEmail(email);
  user.setPassword(password);

  try {
    await user.signUp(null, { useMasterKey: true }); // Use master key para criar o usuário
    return { success: true, message: "Usuário cadastrado com sucesso!" };
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    throw new Parse.Error(
      Parse.Error.INTERNAL_SERVER_ERROR,
      "Erro ao cadastrar usuário: " + error.message
    );
  }
});