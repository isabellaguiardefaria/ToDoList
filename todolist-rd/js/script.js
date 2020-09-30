let btnAddTarefa = document.querySelector("#adicionar-tarefa")
let inputTarefa = document.querySelector('#tarefa-digitada')
let divTarefas = document.querySelector("#tarefas")

function addAcaoDeFianalizarTarefa() {
    let listaDeBotoes = document.querySelectorAll ('.botao-tarefa')

    for (let i=0; i<listaDeBotoes.length; i++){
        let botao = listaDeBotoes[i];

        botao.addEventListener('click', function(){
            if (window.confirm ("Você em certeza que quer concluir a tarefa?")) {
                botao.parentElement.parentElement.remove()
            }
        
        })
    }
}

addAcaoDeFianalizarTarefa()

function criarTarefa () {
    if (inputTarefa.value.trim() == "") {
        //inputTarefa.getElementsByClassName.border = "2px solid red"
        return alert ("Você deve digitar uma tarefa primeiro!")
    }
    let tarefa = `
<div class="col-md-4 mb-4">
    <div class="card-tarefa">
        <div class="texto-tarefa">
            ${inputTarefa.value}
        </div>
        <div class="botao-tarefa">
             <img src="img/check.png" width="32" alt="Botão para finalizar tarefa" title="Botão para finalizar tarefa">
        </div>
    </div>
</div>
`
//divTarefas.innerHTML = divTarefas.innerHTML + tarefa
    divTarefas.innerHTML += tarefa
    
    //alert ("Tarefa criada: " + inputTarefa.value);
    //limpando o input para nova tarefa
    inputTarefa.value = ""
    addAcaoDeFianalizarTarefa()
}

btnAddTarefa.addEventListener('click', criarTarefa)
inputTarefa.addEventListener('keypress', function(event){
    if (event.key == 'Enter') {
        criarTarefa()
    }
})