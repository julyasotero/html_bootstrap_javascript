import { Table } from "./table/table.json"
import { Modal } from "./modal/modal.json"

class Parceiros {
    constructor() {
        this.table = new Table()
    }

    async Iniciar() {
        await this.table.Iniciar()
        await this.MontaHTMLBase()
    }

    async MontaHTMLBase() {
        $('#tabela').html(this.table.html)
        await this.table.MontaDataTable()
    }

    async CriarRegistro() {
        await this.AbrirModal("criacao")
    }

    async AddEventosModal(){
        await this.AbrirModal('salvar')
        this.modal.html.find('#botao_salvar').click('Salvar')
    }

    async Editar(){
        await this.AbrirModal('edicao')
    }

    async AbrirModal(modo) {
        this.modal = new Modal(modo)
        await this.modal.Iniciar()
        $('#modal').html(this.modal.html)
    }
}

export { Parceiros }