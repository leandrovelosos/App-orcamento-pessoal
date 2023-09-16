class Despesa{
    constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }
}

class Bd {

    //verifica a existencia do id em local storage
    constructor(){
        let id = localStorage.getItem('id')

        /*
        o processo de criacao da chave id
        com o valor 0 sera feito sempre no momento da 
        construcao do objeto Bd desde que ainda nao exista 
        uma instrucao para o objeto id 
        armazenado em local storage 
        caso exista o retorno sera o valor armazenado 
        */

        //se id for vazio e somado o valor 0
        if(id === null){
            localStorage.setItem('id', 0)
        }
    }
    getProximoId(){
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1
    }
    gravar(despesa){
        //recebemos um objeto literal na funcao 
        //e o transformamos em um objeto JSON
         
        let id = this.getProximoId()

        localStorage.setItem(id, JSON.stringify(despesa))

        localStorage.setItem('id', id)

        /*
            sempre quando houver a tentativa 
            de gravacao o valor 1 sera retornado
            ----------------------------------------
            se o processo de gravacao for 
            bem sucedido o valor e atualizado a partir da chave id 
            com o novo id
            produzido pelo metodo proximo id
        */
    }
}

let bd = new Bd()

function cadastrarDespesa(){
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
        valor.value)

        bd.gravar(despesa)
}

