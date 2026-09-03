function mostrarDia() {
    diasDaSemanas = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado", "Domingo"];

    const d = new Date();
    let dia = diasDaSemanas[d.getDay()];
    console.log(dia);
    document.getElementById("dia").innerHTML = diasDaSemanas[d.getDay()];

}
mostrarDia();

const disciplinas = [
    {
        id: 0, aulas: [
            "Windows 1: Introducão",
            "Windows 2: Arquivos e Pastas"
        ]
    },
    {
        id: 1, aulas: [
            "1: Introdução ao Word",
            "2: Imagens e Formas"
        ]
    }
];

function disciplinaSelecionada() {
    const valorSelecionado = document.getElementById("disciplinas").value;
    const { aulas } = disciplinas[valorSelecionado];
    document.getElementById("infoAula").innerHTML = aulas.join("<br>");
}
disciplinaSelecionada();


function escolherTela() {
    const navTelas = document.getElementById("minhas-telas");
    navTelas.addEventListener("click", function (event) {
        // Procura a tag <a> mais próxima a partir do elemento clicado (mesmo se for a <img>)
        const link = event.target.closest("a.btn");
        if (link) {
            event.preventDefault(); // Evita o salto do href="#"
            // Obtém o valor do atributo data-id
            const id = link.dataset.id;
            console.log("Tela selecionada:", id);
            if(id == 1){
                document.getElementById("home").style.display = 'block';
                document.getElementById("cronograma").style.display = 'none';
                document.getElementById("cadastro").style.display = 'none';
            }else if(id == 2){
                document.getElementById("home").style.display = 'none';
                document.getElementById("cronograma").style.display = 'block';
                document.getElementById("cadastro").style.display = 'none';
            }
            else{
                document.getElementById("home").style.display = 'none';
                document.getElementById("cronograma").style.display = 'none';
                document.getElementById("cadastro").style.display = 'block';
            }
        }
    });
}
escolherTela();