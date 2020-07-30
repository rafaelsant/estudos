class Despesa{
    constructor(ano,mes,dia,tipo,descricao,valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }
    validarDados(){
       for(let i in this){
           if(this[i]== undefined || this[i]=="" || this[i]==null){
               return false
           }else{
               return true
           }
       }
    }
}
class Bd{
    constructor(){
        let id = localStorage.getItem('id')
        if(id === null){
            localStorage.setItem('id',0)
        }
    }
    getProximoId(){
        let proximoid = localStorage.getItem('id')
        return parseInt(proximoid)+1
    }
    gravar(d){
        let id = this.getProximoId()
        localStorage.setItem(id,JSON.stringify(d))
        localStorage.setItem('id',id)
    }
    recuperarTodosRegistros(){
        //criando array de despesas
        let despesas = []
        let id = localStorage.getItem('id')
        //recuperar todas as despesas cadastrdas em local storage
        for(let i=1;i<=id;i++){
            //recuperar as despesas
            let despesa = JSON.parse(localStorage.getItem(i))
            //verificando a possibilidade de indíces removidos
            if(despesa === null){
                continue
            }else{
                despesa.id = i
                despesas.push(despesa)
            }
        }
        return despesas
    }
    pesquisar(despesa){
        let despesasFiltradas = Array()
        despesasFiltradas = this.recuperarTodosRegistros()
        
        //ano
        if(despesa.ano!=''){
            despesasFiltradas = despesasFiltradas.filter(d=>d.ano == despesa.ano)
        }
        //mes
        if(despesa.mes!=''){
            despesasFiltradas = despesasFiltradas.filter(d=>d.mes == despesa.mes)
        }
        //dia
        if(despesa.dia!=''){
            despesasFiltradas = despesasFiltradas.filter(d=>d.dia == despesa.dia)
        }
        //tipo
        if(despesa.tipo!=''){
            despesasFiltradas = despesasFiltradas.filter(d=>d.tipo == despesa.tipo)
        }
        //descrição
        if(despesa.descricao!=''){
            despesasFiltradas = despesasFiltradas.filter(d=>d.descricao == despesa.descricao)
        }
        //valor
        if(despesa.valor!=''){
            despesasFiltradas = despesasFiltradas.filter(d=>d.valor == despesa.valor)
        }
        return despesasFiltradas
    }
    remover(id){
        localStorage.removeItem(id)
    }
}
function modalSucesso(){
        $('#modalRegistraDespesa').modal('show')
        document.getElementById('modal_titulo').innerHTML = 'Registro inserido com sucesso!'
        document.getElementById('modalRegistraDespesaText').className = 'modal-header text-success'
        document.getElementById('modalRegistraDespesaBody').innerHTML = 'Despesa foi cadastrada com sucesso'
        document.getElementById('modalRegistraDespesaBtn').className = 'btn btn-success'
}
function modalErro(){
    $('#modalRegistraDespesa').modal('show')
    document.getElementById('modal_titulo').innerHTML = 'Erro no registro!'
    document.getElementById('modalRegistraDespesaText').className = 'modal-header text-danger'
    document.getElementById('modalRegistraDespesaBody').innerHTML = 'Erro no registro, insira dados nos campos'
    document.getElementById('modalRegistraDespesaBtn').className = 'btn btn-danger'
}
function limparCadastro(){
    //limpando pagina depois do cadastro
    document.getElementById('ano').value=''
    document.getElementById('mes').value=''
    document.getElementById('dia').value=''
    document.getElementById('tipo').value=''
    document.getElementById('descricao').value=''
    document.getElementById('valor').value=''
}
let bd = new Bd()
function cadastrarDespesas(){
    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')
    
    let despesa = new Despesa(
        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.value
    )
    if(despesa.validarDados()){
        bd.gravar(despesa)
        modalSucesso()
        limparCadastro()
    }else{
        //exibindo modal de erro
        modalErro()
    }
    
}
function limparCelulas(){
    //limpa o elemento tbody
    let listaDespesas = document.getElementById('listaDespesas')
    listaDespesas.innerHTML = ''
}
function carregaListaDespesas(despesas = Array()){
    if(despesas.length == 0){
        despesas = bd.recuperarTodosRegistros()
    }
    //selecionando o elemento tbody da tabela
    let listaDespesas = document.getElementById('listaDespesas')
    //percorrer o array despesas, listando cada uma de forma dinamica
    despesas.forEach(function(d){
        //criando a linha (tr)
        let linha = listaDespesas.insertRow()
        //criar as colunas (td)
        linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`
        //ajustando tipo:
        switch(d.tipo){
            case "1":d.tipo="Alimentação"
                break
            case "2":d.tipo="Educação"
                break
            case "3":d.tipo="Lazer"
                break
            case "4":d.tipo="Saúde"
                break
            case "5":d.tipo="Transportes"
                break
        }
        linha.insertCell(1).innerHTML = d.tipo
        linha.insertCell(2).innerHTML = d.descricao
        linha.insertCell(3).innerHTML = `R$${d.valor}`
        //criar o botão de exclusao
        let btn = document.createElement("button")
        btn.className = 'btn btn-danger'
        btn.innerHTML = '<i class="fas fa-times"></i>'
        btn.id = `id_despesa_${d.id}`
        btn.onclick = function(){
            //remover despesa
            let id = this.id.replace('id_despesa_','')
            bd.remover(id)
            window.location.reload()
        }
        linha.insertCell(4).append(btn)
    })
}
function pesquisarDespesa(){
    let ano = document.getElementById('ano').value
    let mes = document.getElementById('mes').value
    let dia = document.getElementById('dia').value
    let tipo = document.getElementById('tipo').value
    let descricao = document.getElementById('descricao').value
    let valor = document.getElementById('valor').value
    let despesa = new Despesa(ano,mes,dia,tipo,descricao,valor)
    let despesas = bd.pesquisar(despesa)
    let listaDespesas = document.getElementById('listaDespesas')
    limparCelulas()
    carregaListaDespesas(despesas)
}