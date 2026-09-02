const disciplinas = [
    {id: 0, aulas: [
        "Windows 1: Introducão",
        "Windows 2: Arquivos e Pastas"
    ]},
    {id: 1, aulas: [
        "1: Introdução ao Word",
        "2: Imagens e Formas"
    ]}
];

function disciplinaSelecionada(){
    const valorSelecionado = document.getElementById("disciplinas").value;
    const {aulas} = disciplinas[valorSelecionado];
    document.getElementById("infoAula").innerHTML = aulas.join("<br>");
}
disciplinaSelecionada();

function escolherTela(){
    const telas = document.querySelectorAll('.tela');
    console.log(telas);
    //em desenvolvimento

}
escolherTela();