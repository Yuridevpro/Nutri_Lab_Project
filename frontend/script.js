// *** Inicialização do Parse ***
Parse.serverURL = "https://parseapi.back4app.com/";
Parse.initialize(
  "GAcpwTn8vWR3IH6vopjoWxeMi9r0HNQpujteULei",
  "eohDaTIobNJcVdrnRoJHmU9Sgm1i8TtsJ7HdWg1O"
);

// Yuri
// *** Funções para Refeicao ***

// Função para criar refeição
async function criarRefeicao(
  pacienteId,
  titulo,
  horario,
  carboidratos,
  proteinas,
  gorduras
) {

  try {
    const result = await Parse.Cloud.run("criarRefeicao", {
      pacienteId: pacienteId,
      titulo: titulo,
      horario: horario,
      carboidratos: carboidratos,
      proteinas: proteinas,
      gorduras: gorduras,
    });
    return result;
  } catch (error) {
    console.error("Erro ao criar refeição:", error);
    alert("Erro ao criar refeição: " + error.message);
    return null;
  }
}
// Fim yuri

// *** Funções de Autenticação - Verificação de Sessão ***
async function requireAuth() {
  try {
    const currentUser = await Parse.User.currentAsync();
    if (!currentUser) {
      console.log("Usuário não autenticado. Redirecionando...");
      window.location.replace("/templates/autenticacao/logar.html");
    }
  } catch (error) {
    console.error("Erro ao verificar autenticação:", error);
    alert(
      "Erro ao verificar autenticação. Redirecionando para login. Detalhes: " +
        error.message
    );
    window.location.replace("/templates/autenticacao/logar.html");
  }
}



// Adiciona a função deslogarUsuario
async function deslogarUsuario() {
  try {
    // Desloga o usuário no Back4App (se necessário)
    await Parse.User.logOut();

    localStorage.removeItem("sessionToken"); // Limpa o token
    alert("Usuário deslogado com sucesso!");
    window.location.href = "/index.html"; // Redireciona para a página inicial
  } catch (error) {
    console.error("Erro ao deslogar usuário:", error);
    alert("Erro ao deslogar usuário: " + error.message);
  }
}