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
        let id = localStorage.getItem('id')
        //recuperar todas as despesas cadastrdas em local storage
        for(let i=1;i<=id;i++){
            //recuperar as despesas
            let despesa = JSON.parse(localStorage.getItem(i))
            console.log(i,despesa)
        }
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
    }else{
        //exibindo modal
        modalErro()
    }
    
}
function carregaListaDespesas(){
    bd.recuperarTodosRegistros()
}