// backend/cloud/models.js

// *** Definição das Classes (Modelos) ***

// Alan
// Classe Pacientes
Parse.Object.registerSubclass(
    "Pacientes",
    class Pacientes extends Parse.Object {
        constructor() {
            super("Pacientes");
        }

        // Getters e Setters (opcional, mas ajuda a organizar e evitar erros de digitação)
        getNome() {
            return this.get("nome");
        }
        setNome(nome) {
            this.set("nome", nome);
        }

        getSexo() {
            return this.get("sexo");
        }
        setSexo(sexo) {
            this.set("sexo", sexo);
        }

        getIdade() {
            return this.get("idade");
        }
        setIdade(idade) {
            this.set("idade", idade);
        }

        getEmail() {
            return this.get("email");
        }
        setEmail(email) {
            this.set("email", email);
        }

        getTelefone() {
            return this.get("telefone");
        }
        setTelefone(telefone) {
            this.set("telefone", telefone);
        }
    },
);
// Fim Alan
