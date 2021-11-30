class Table {
    constructor() {

    }

    async Iniciar() {
        this.html_string = await $.ajax({
            url: 'table/table.html',
            type: "GET"
        })
        console.log(this.html_string)
        this.html = $(this.html_string)
    }

    async MontaDataTable() {
        this.html.DataTable({
            ajax: {
                type: "GET",
                url: "table/table.json",
                contentType: 'application/json',
                dataSrc: function (json) {
                    console.log(json)
                    return json;
                }
            },
            columns: [
                { title: "Id", data: "id", visible: false },
                { title: "Nome Parceiro", data: "nome_parceiro" },
                { title: "Data Cadastro", data: "data_cadastro" },
                { title: "Data Fim", data: "data_fim" }
            ]
        })
    }
}

export { Table }