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
        id: 0,
        aulas: [
            "1: Hardware, Software, S.O., Bill Gates, Microsoft",
            "2: Evolução dos S.O. Windows XP a 10, Computação em nuvem e Internet das coisas",
            "3: Menu iniciar, área de trabalho, Ícones, barra de pesquisa, fixar e desafixar ícones, desligar/suspender",
            "4: Trocar imagens de ícones, Atalhos, Lixeira, Temas (plano de fundo, cor e tela de bloqueio)",
            "5: Pastas, Dimensionar janelas, maximizar, minimizar e restaurar, múltiplas janelas, múltiplas áreas de trabalho",
            "6: Modos de exibição de pasta, Calculadora, Bloco de notas, Captura de tela e Paint 3D",
            "7: Paint 3D e WordPad",
            "8: Painel de controle (configuração de mouse e desinstalar programas), Contas de usuário (Padrão e Microsoft) e cortana",
            "9: Windows Movie Maker",
            "10: Photo Gallery, extensões de arquivos, Vírus, Hacker e Cracker",
            "11: Aplicativos do sistema (Calendário, E-mail, Clima), alterar data e hora, windows media player",
            "12: Revisão / alinhamento",
            "13: Avaliação - carga horária: 22 horas"
        ]
    },
    {
        id: 1,
        aulas: [
            "1: Introdução - Digitação e formatação (fonte, tamanho, cor, margens, parágrafo, alinhamento, salvar como)",
            "2: Currículo - Bordas, marcadores e correção ortográfica",
            "3: Localizar - substituir, tabelas e teclas de atalho",
            "4: Colunas, numeração de página e hifenização",
            "5: Imagens, formas e smart art",
            "6: Caixa de texto, word art e letra capitular",
            "7: Cabeçalho e rodapé, tabulação",
            "8: Símbolos, Mala direta e configuração de impressão",
            "9: Revisão / alinhamento",
            "10: Avaliação - carga horária: 20 horas"
        ]
    },
    {
        id: 2,
        aulas: [
            "1: Apresentação da interface do programa, iniciação a seleção e trabalho com camadas",
            "2: Ferramenta Laço, Laço Poligonal, Laço Magnético, Seleção Rápida e Varinha Mágica",
            "3: Recorte de imagens, Suavização de bordas, Níveis, Curvas, Brilho e Contraste, Vibratilidade, Matriz e Saturação, Filtro de Fotos.",
            "4: Trabalho Prático de utilização das ferramentas anteriores (MONTAGEM)",
            "5: Ferramenta Carimbo, Pincel de Recuperação de Manchas, Pincel de Recuperação, Correção, Olhos Vermelhos",
            "6: Restauração de Imagens Antigas aplicando técnicas de coloração de imagens PxB",
            "7: FILTRO DE CAMADAS I",
            "8: Aplicação dos conceitos de iluminação em trabalho para os alunos",
            "9: FILTRO DE CAMADAS II",
            "10: Avaliação - carga horária: 20 horas"
        ]
    },
    {
        id: 3,
        aulas: [
            "1: Introdução, ferramentas formas e seleção + exercícios",
            "2: Logotipos geométricos, corte de objetos + exercícios",
            "3: Ferramenta texto + cartões de visita (revisando aula 2)",
            "4: Vetores + exercícios",
            "5: Ilustrações + exercícios",
            "6: Ilustrações estilo Gestault + exercícios",
            "7: Revisão + exercícios",
            "8: Avaliação - carga horária: 16 horas"
        ]
    },
    {
        id: 4,
        aulas: [
            "1: Apresentação Histórica das redes sociais - O WWW o que é?",
            "2: Evolução das redes sociais",
            "3: Criação de Persona, público alvo, apresentação de Planilhas para gerenciamento",
            "4: Criação de campanha - Avaliação - carga horária: 16 horas"
        ]
    },
    {
        id: 5,
        aulas: [
            "1: Apresentação do programa, modelos de design, slides, temas e transições",
            "2: Formatação básica de textos, aplicação de estilos de slides",
            "3: Inserção de imagens, transições e suas configurações, animações e suas configurações",
            "4: Inserção de tabelas e gráficos, alteração das configurações dos slides",
            "5: Trabalhando com Links e ações em slides, meu primeiro menu com links, slides mestres, vídeos",
            "6: Iniciação do projeto final: Normalmente trago temas do cotidiano para apresentação",
            "7: Apresentação do trabalho final pelos alunos - Avaliação"
        ]
    },
    {
        id: 6,
        aulas: [
            "1: Apresentação do programa, planilhas, colunas, linhas e células",
            "2: Cálculos básicos: Adição, subtração, divisão, multiplicação, cálculo de potência, expressões numéricas e cálculo de delta da fórmula de bhaskara",
            "3: Primeira parte de funções: Soma, média, maior, menor, máximo, mínimo e raiz",
            "4: Funções somase, agora, hoje, cont.se e cont.núm",
            "5: Funções Proc, ProcH e ProcV",
            "6: Funções SE",
            "7: Formatação de células, inserindo linhas e colunas, bordas, classificação de dados e inserindo imagens",
            "8: Gráficos, Agrupamentos, filtros de tabela dinâmica",
            "9: Validação de dados, segurança, formatação condicional e importação de dados",
            "10: Avaliação - carga horária: 20 horas"
        ]
    },
    {
        id: 7,
        aulas: [
            "1: Apresentação das TAGS, o que é o HTML, como ele foi criado",
            "2: Formatação de textos, hipertextos, cabeçalhos e cores",
            "3: Réguas e listas",
            "4: Menu de navegação, links, inserção de imagens e inserção de vídeos",
            "5: Inserção de tabelas e formulários",
            "6: Revisão e alinhamento",
            "7: Avaliação - carga horária: 14 horas"
        ]
    },
    {
        id: 8,
        aulas: [
            "1: O que é o CSS, modos de inserção, Seletores - Propriedades - Valores",
            "2: Estruturação do arquivo css, DIV, Class e ID",
            "3: Formatação de textos, bordas e background",
            "4: Criação de menu DROP and DOWN",
            "5: Estilizando formulários",
            "6: Avaliação - carga horária: 12 horas"
        ]
    },
    {
        id: 9,
        aulas: [
            "1: Apresentação da interface do programa",
            "2: E",
            "3: Layout das páginas CSS, Design Responsivo, texto, lista numeradas e não numeradas, Formatação Texto, Datas e imagens",
            "4: Incorporação de elementos de áudio e vídeo e suas configurações",
            "5: Hyperlinks, vinculação, email, Menus, formulários",
            "6: Avaliação - carga horária: 12 horas"
        ]
    },
    {
        id: 10,
        aulas: [
            "1: Apresentação do programa, o que é timeline, o que é frame, configurando a área de trabalho",
            "2: Barra de ferramentas, manipulando formas, convertendo formas em objetos, agrupamento",
            "3: Posição, rotação e redimensionamento, camadas, vetorização",
            "4: Trabalho prático, com auxílio - Minha primeira animação",
            "5: Interpolação de Forma, Interpolação de Objeto, quadros Chaves, animação frame a frame",
            "6: Linha guia de movimento, manipulação do clipe de filme",
            "7: Avaliação - carga horária: 14 horas"
        ]
    },
    {
        id: 11,
        aulas: [
            "1: Apresentação inicial do Premiere e After Effects",
            "2: Trabalhando com as formas, e ferramentas de vetorização no After, configuração de composição, timeline e frames",
            "3: Propriedade das camadas e efeitos nativos do after effects I",
            "4: (continuação) efeitos nativos do after effects II | Finalizando o arquivo",
            "5: Edição com o premiere",
            "6: Avaliação - carga horária: 12 horas",
            "7: Trabalho final avaliativo"
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