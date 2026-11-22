
// ARRAY: Armazena os alunos cadastrados
let alunos = [
    { nome: "Ana", nota: 8.5 },
    { nome: "Pedro", nota: 5.0 },
    { nome: "Mariana", nota: 9.2 }
];


// FUNÇÃO: Cadastrar um novo aluno
function cadastrarAluno() {

    // VARIÁVEIS: Guardam os dados digitados
    let nome = document.getElementById("nome").value;
    let nota = Number(document.getElementById("nota").value);

    console.log("Nome:", nome);
    console.log("Nota:", nota);

    // CONDICIONAL: Verifica os dados
    if (nome === "" || document.getElementById("nota").value === "" ||
        nota < 0 || nota > 10) {

        alert("Preencha corretamente o nome e a nota!");

    } else {

        // ARRAY: Adiciona um novo aluno
        alunos.push({
            nome: nome,
            nota: nota
        });

        alert("Aluno cadastrado com sucesso!");

        console.log("Aluno cadastrado:", nome);

        // Limpa os campos
        document.getElementById("nome").value = "";
        document.getElementById("nota").value = "";

        listarAlunos();
    }
}


// FUNÇÃO: Exibir os alunos na tabela
function listarAlunos() {

    let tabela = document.getElementById("listaAlunos");

    tabela.innerHTML = "";

    // LAÇO DE REPETIÇÃO: Percorre o array
    for (let i = 0; i < alunos.length; i++) {

        let situacao = "";

        // CONDICIONAL: Verifica a aprovação
        if (alunos[i].nota >= 7) {

            situacao = "Aprovado";

        } else {

            situacao = "Reprovado";
        }

        console.log(alunos[i].nome + ": " + situacao);

        // Adiciona os dados na tabela
        tabela.innerHTML += `
            <tr>
                <td>${alunos[i].nome}</td>
                <td>${alunos[i].nota}</td>
                <td class="${situacao === "Aprovado" ? "aprovado" : "reprovado"}">
                    ${situacao}
                </td>
            </tr>
        `;
    }

    // Mostra a quantidade de alunos
    console.log("Total de alunos:", alunos.length);
}


// FUNÇÃO: Calcular os resultados
function calcularResultados() {

    let aprovados = 0;
    let reprovados = 0;
    let soma = 0;

    // LAÇO: Percorre todos os alunos
    for (let i = 0; i < alunos.length; i++) {

        soma = soma + alunos[i].nota;

        // CONDICIONAL: Conta os resultados
        if (alunos[i].nota >= 7) {

            aprovados++;

        } else {

            reprovados++;
        }
    }

    // CALCULA A MÉDIA
    let media = soma / alunos.length;

    console.log("Aprovados:", aprovados);
    console.log("Reprovados:", reprovados);
    console.log("Média da turma:", media);

    // Mostra o resultado na página
    document.getElementById("resultado").innerHTML =
        "Aprovados: " + aprovados +
        " | Reprovados: " + reprovados +
        " | Média: " + media.toFixed(2);
}


// EXECUTA AS FUNÇÕES AO ABRIR A PÁGINA
listarAlunos();
calcularResultados();
