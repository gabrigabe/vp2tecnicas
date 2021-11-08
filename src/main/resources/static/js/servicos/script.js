function loadTable() {
    const req = new XMLHttpRequest();
    req.open("GET", "servicos", true);
    req.send();
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var trHTML = '';
            const objects = JSON.parse(this.responseText);
            for (let object of objects) {
                trHTML += '<tr>';
                trHTML += '<td>'+object['id']+'</td>';
                trHTML += '<td>'+object['nomeServico']+'</td>';
                trHTML += '<td>'+object['custoServico']+'</td>';
                trHTML += '<td>'+object['custoPecas']+'</td>';
                trHTML += '<td>'+object['precoTotal']+'</td>';
                trHTML += '<td><button type="button" class="btn btn-primary" onclick="janelaEditarServico('+object['id']+')">Editar</button></td>';
                trHTML += '<td><button type="button" class="btn btn-danger" onclick="removerServico('+object['id']+')">Remover</button></td>';
                trHTML += "</tr>";
            }
            document.getElementById("mytable").innerHTML = trHTML;
        }
    };

}

loadTable();

function janelaCriarPeca(id) {
    const req = new XMLHttpRequest();
    req.open("GET", "pecas", true);
    req.send();


    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const object = JSON.parse(this.responseText);

            const options = {};
            const teste3 = {};
            const idlouco = {};
            object.map(function (peca) {
                options[peca.id] = peca.nome
                teste3[peca.id] = peca.preco;
                idlouco[peca.id] = peca.id;
                this.id = peca.id;

            })
            console.log(teste3)

            const req2 = new XMLHttpRequest();
            const newObject = JSON.parse(this.responseText);
            newObject.map(function (teste) {

                this.teste2 = teste.preco;
                this.idTeste = teste.id;

            })
            req2.open("GET", `pecas/${idTeste}`, true);
            req2.setRequestHeader("Content-Type", "application/json");
            req2.send();

            swal.fire({
                title: 'Adcionar Serviço',
                input: 'select',
                inputOptions: options,
                html:
                    '<input id="id" type="hidden">' +
                    '<input id="nomeServico" class="swal2-input" placeholder="Nome Serviço">' +
                    '<input id="custoServico" type="number" class="swal2-input" placeholder="Mão de obra">',
                focusConfirm: false,
                preConfirm: () => {
                    novoServico();
                }
            }).then(function (inputValue) {
                    if (inputValue) {
                        console.log(inputValue)
                    }
                }
            )
        }

    }
}


    function novoServico(){

        const nomeServico = document.getElementById("nomeServico").value;
        const custoPecas = teste2;
        const custoServico = document.getElementById("custoServico").value;
        const precoTotal =  Number(teste2) + Number(custoServico);

        const req = new XMLHttpRequest();
        req.open("POST", "servicos", true);
        req.setRequestHeader("Content-Type", "application/json");
        req.send(JSON.stringify({
            "nomeServico": nomeServico,
            "custoServico": custoServico,
            "custoPecas": custoPecas,
            "precoTotal": precoTotal,
        }));
        req.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                Swal.fire({
                    title: "Serviço adcionado"
                });
                loadTable();
            }
        }

    }



    function removerServico(id){
        const req = new XMLHttpRequest();
        req.open("DELETE", `servicos/${id}`);
        req.setRequestHeader("Content-Type", "application/json");
        req.send(JSON.stringify({
            "id": id
        }));
        req.onreadystatechange = function() {
            if (this.readyState == 4) {
                Swal.fire({
                    title: "Serviço removido"
                });
                loadTable();
            }
        };
    }

    function janelaEditarServico(id) {
    const req = new XMLHttpRequest();
    req.open("GET", `servicos/${id}`);
    req.send();

    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const object = JSON.parse(this.responseText);

            Swal.fire({
                title: 'Editar serviço',
                html:
                    '<input id="id" type="hidden" value='+object['id']+'>' +
                    '<input id="nomeServico" class="swal2-input" value="'+object['nomeServico']+'">' +
                    '<input id="custoServico" class="swal2-input" value="'+object['custoServico']+'">',
                focusConfirm: false,
                preConfirm: () => {
                    editarServico();
                }
            })
        }
    };
}

function editarServico(){
    const id = document.getElementById("id").value;
    const nomeServico = document.getElementById("nomeServico").value;
    const custoServico = document.getElementById("custoServico").value;
    const precoTotal =  Number(custoServico);

    const req = new XMLHttpRequest();
    req.open("PUT", `servicos/${id}`, true);
    req.setRequestHeader("Content-Type", "application/json");
    req.send(JSON.stringify({
        "nomeServico": nomeServico,
        "custoServico": custoServico,
        "precoTotal": precoTotal,

    }));
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            Swal.fire({
                title: "Peça Editada"
            });
            loadTable();
        }
    }

}