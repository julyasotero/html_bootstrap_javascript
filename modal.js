class Modal {

    constructor(modo, id) {
        this.modo = modo
        this.id = id
    }

    async Iniciar() {
        await this.BuscarDados()
        await this.LoadHTMLBase()
        await this.PopularDados()
    }
    
    async BuscarDados() {
        console.log('BuscarDados');
        
        this.dados = await $.ajax({
            url: 'modal/dados.json',
            type: "GET"
        })
        
    }
    
    async LoadHTMLBase() {
        console.log('LoadHTMLBase');
        this.html_string = await $.ajax({
            url: 'moda/modal.html',
            type: 'GET'
        })
        
        //console.log(this.html_string)
        this.html = $(this.html_string)
        
        if (this.IsLeitura) {
            this.html.find("#titulo").prepend("Consultar ")
            this.html.find("input").prop("readonly", true)
            this.html.find("#botao_fechar").show()
        } else if (this.IsEdicao) {
            this.html.find("#titulo").prepend("Editar ")
            this.html.find("input").prop("readonly", false)
            this.html.find("#botao_salvar").show()
            this.html.find("#botao_inativar").show()
            this.html.find("#botao_fechar").show()
            
        } else if (this.IsCriacao) {
            this.html.find("#titulo").prepend("Criar ")
            this.html.find("input").prop("readonly", false)
            this.html.find("#botao_salvar").show()
            this.html.find("#botao_fechar").show()
        } else {
            console.log("Erro")
        }
    }
    
    async PopularDados() {
        console.log('PopularDados');
        this.html.find("#nome_parceiro").val(this.dados[0].nome_parceiro)
        this.html.find("#data_cadastro").val(this.dados[1].data_cadastro)
        this.html.find("#data_fim").val(this.dados[2].data_fim)
    }
    
    IsLeitura() {
        return this.modo == "leitura"
    }

    IsEdicao() {
        return this.modo == "edicao"
    }
    
    IsCriacao() {
        return this.modo == "criacao"
    }

}

module.exports = { Modal }