
async function pesquisarAluno() {

    let campoPesquisar = document.getElementById("campoPequisa").value;
    

    let resultado = await fetch("/api/alunos/pesquisa?nome=" + encodeURIComponent(campoPesquisar));

    let resultadoJson = await resultado.json();

    console.log(resultadoJson)

    listarDadosAlunos(resultadoJson)
}



async function excluirAluno(id) {
    alert()

    let opcao = {
        method:"DELETE"
    }

    let retorno = await fetch("/api/alunos/"+ id , opcao);

    atualizarDados();
}

async function atualizarDados() {
    let pegarDadosAlunos = await fetch(`/api/alunos`);
    let dadosFormatoJson = await pegarDadosAlunos.json();
    listarDadosAlunos(dadosFormatoJson) 
}


async function listarDadosAlunos(dadosFormatoJson){
    let tabela = document.getElementById('teste');
    tabela.innerHTML = ""

    for(let index = 0; index < dadosFormatoJson.length; index ++){

        let linha = document.createElement("tr");
        linha.innerHTML= `
        <td> ${dadosFormatoJson[index].id}</td>
        <td> ${dadosFormatoJson[index].nome}</td>
        <td> ${dadosFormatoJson[index].curso}</td>
        <td> ${dadosFormatoJson[index].ano}</td>
        <td><span onclick='excluirAluno(${dadosFormatoJson[index].id})' class="material-symbols-outlined" aria-label="Deletar" >delete</span></td>
        <td><span onclick='mostrarEdicao(${dadosFormatoJson[index].id})' class="material-symbols-outlined" aria-label="Edit" >edit</span></td>
        `
        tabela.appendChild(linha)
    }

}


atualizarDados()



async function adicionarContatos(evento) {
    evento.preventDefault();
    let nome = document.getElementById("nome").value;
    let curso = document.getElementById("curso").value;
    let ano = document.getElementById("ano").value;

    let novoAluno ={
        nome:nome,
        curso:curso,
        ano:ano
    };

    let alunoJson = JSON.stringify(novoAluno);

    let requisicaoDoFecht ={
        method:"POST",
        headers:{
            "Content-Type": 'application/json'
        },
        body:alunoJson
    };

    let retorno = await fetch("/api/alunos/", requisicaoDoFecht);
    let objetoRetorno = await retorno.json();
    console.log(objetoRetorno)
    atualizarDados();
}

let formularioLogin = document.getElementById("formularioLogin");
formularioLogin.addEventListener("submit", adicionarContatos);


// Dialog 

async function mostrarEdicao(dados){
    let pegarDadosAluno = await fetch(`/api/alunos/`+ dados);
    let dadosFormatoJson = await pegarDadosAluno.json(); 
    
    areaEdicao = document.getElementById("exemplo1");
    areaEdicao.showModal();

    let id = document.getElementById("formEdicaoId");
    let nome = document.getElementById("formEdicaoNome");
    let curso = document.getElementById("formEdicaocurso");
    let ano = document.getElementById("formEdicaoAno");

    id.value = dadosFormatoJson.id;
    nome.value = dadosFormatoJson.nome;
    curso.value = dadosFormatoJson.curso;
    ano.value = dadosFormatoJson.ano;
}

function esconderEdicao(){
    let areaEdicao = document.getElementById("exemplo1");
    areaEdicao.close();

}

async function salvarEdicao(evento){
    evento.preventDefault();
  
    let id = document.getElementById("formEdicaoId").value;
    let nome = document.getElementById("formEdicaoNome").value;
    let curso = document.getElementById("formEdicaocurso").value;
    let ano = document.getElementById("formEdicaoAno").value;

    let objetoAtualizar = {
        id: id,
        nome: nome,
        curso: curso,
        ano: ano
    }

    let stringJson = JSON.stringify(objetoAtualizar);
    let operacaoFetch = {
        method:"PUT",
        headers:{
            "Content-Type": 'application/json'
        },
        body:stringJson
    }

    retorno = await fetch("/api/alunos/"+id, operacaoFetch);
    atualizarDados();
    esconderEdicao();
}

formularioEdicao = document.getElementById("formularioEdicao");
formularioEdicao.addEventListener("submit",salvarEdicao);
