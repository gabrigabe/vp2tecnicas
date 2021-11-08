function loadTable() {
    const req = new XMLHttpRequest();
    req.open("GET", "pecas", true);
    req.send();
    req.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        var trHTML = ''; 
        const objects = JSON.parse(this.responseText);
        for (let object of objects) {
          trHTML += '<tr>'; 
          trHTML += '<td>'+object['id']+'</td>';
          trHTML += '<td>'+object['nome']+'</td>';
          trHTML += '<td>'+object['fabricante']+'</td>';
          trHTML += '<td>'+object['estoque']+'</td>';
          trHTML += '<td>'+object['preco']+'</td>';
          trHTML += '<td><button type="button" class="btn btn-primary" onclick="janelaEditarPeca('+object['id']+')">Editar</button></td>';
          trHTML += '<td><button type="button" class="btn btn-danger" onclick="removerPeca('+object['id']+')">Remover</button></td>';
          trHTML += "</tr>";
        }
        document.getElementById("mytable").innerHTML = trHTML;
      }
    };

  }
  
  loadTable();

function janelaCriarPeca(){
    Swal.fire({
        title: 'Adcionar peça',
        html:
            '<input id="id" type="hidden">' +
            '<input id="nome" class="swal2-input" placeholder="Nome da peça">' +
            '<input id="fabricante" class="swal2-input" placeholder="fabricante da peça">' +
            '<input id="estoque" type="number" class="swal2-input" placeholder="quantidade em estoque">' +
            '<input id="preco" type="number" class="swal2-input" placeholder="preço da peça">',
        focusConfirm: false,
        preConfirm: () => {
            adcionarPeca();
        }
    })

}

function adcionarPeca(){
    const nome = document.getElementById("nome").value;
    const fabricante = document.getElementById("fabricante").value;
    const estoque = document.getElementById("estoque").value;
    const preco = document.getElementById("preco").value;

    const req = new XMLHttpRequest();
    req.open("POST", "pecas", true);
    req.setRequestHeader("Content-Type", "application/json");
    req.send(JSON.stringify({
        "nome": nome,
        "fabricante": fabricante,
        "estoque": estoque,
        "preco": preco,

    }));
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            Swal.fire({
                title: "Peça Adcionada"
            });
            loadTable();
        }
    }

}


function removerPeca(id) {
    const req = new XMLHttpRequest();
    req.open("DELETE", `pecas/${id}`);
    req.setRequestHeader("Content-Type", "application/json");
    req.send(JSON.stringify({
        "id": id
    }));
    req.onreadystatechange = function() {
        if (this.readyState == 4) {
            Swal.fire({
                title: "Peça removida"
            });
            loadTable();
        }
    };
}

function janelaEditarPeca(id) {
    const req = new XMLHttpRequest();
    req.open("GET", `pecas/${id}`);
    req.send();
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const object = JSON.parse(this.responseText);
            Swal.fire({
                title: 'Editar peça',
                html:
                    '<input id="id" type="hidden" value='+object['id']+'>' +
                    '<input id="nome" class="swal2-input" value="'+object['nome']+'">' +
                    '<input id="fabricante" class="swal2-input" value="'+object['fabricante']+'">' +
                    '<input id="estoque" type="number" class="swal2-input" value="'+object['estoque']+'">' +
                    '<input id="preco" type="number" class="swal2-input" value="'+object['preco']+'">',
                focusConfirm: false,
                preConfirm: () => {
                    editarPeca();
                }
            })
        }
    };
}

function editarPeca(){
    const id = document.getElementById("id").value;
    const nome = document.getElementById("nome").value;
    const fabricante = document.getElementById("fabricante").value;
    const estoque = document.getElementById("estoque").value;
    const preco = document.getElementById("preco").value;

    const req = new XMLHttpRequest();
    req.open("PUT", `pecas/${id}`, true);
    req.setRequestHeader("Content-Type", "application/json");
    req.send(JSON.stringify({
        "nome": nome,
        "fabricante": fabricante,
        "estoque": estoque,
        "preco": preco,

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