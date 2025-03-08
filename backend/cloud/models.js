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

// Yuri
// Classe Refeicao
Parse.Object.registerSubclass(
    "Refeicao",
    class Refeicao extends Parse.Object {
        constructor() {
            super("Refeicao");
        }
        getPaciente() {
            return this.get("paciente");
        }
        setPaciente(paciente) {
            this.set("paciente", paciente);
        }

        getTitulo() {
            return this.get("titulo");
        }
        setTitulo(titulo) {
            this.set("titulo", titulo);
        }

        // New Getters and Setters for Descricao
        getDescricao() {
            return this.get("descricao");
        }
        setDescricao(descricao) {
            this.set("descricao", descricao);
        }

        getHorario() {
            return this.get("horario");
        }
        setHorario(horario) {
            this.set("horario", horario);
        }

        getCarboidratos() {
            return this.get("carboidratos");
        }
        setCarboidratos(carboidratos) {
            this.set("carboidratos", carboidratos);
        }

        getProteinas() {
            return this.get("proteinas");
        }
        setProteinas(proteinas) {
            this.set("proteinas", proteinas);
        }

        getGorduras() {
            return this.get("gorduras");
        }
        setGorduras(gorduras) {
            this.set("gorduras", gorduras);
        }
    }
);
// Fim Yuri