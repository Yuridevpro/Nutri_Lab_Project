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