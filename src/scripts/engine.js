// 1. Engine (nome mais utilizado no mundo dos jogos), pode ser chamdo de "main.js". 
// 2. Para acessar as variáveis e executar alguma alterção só digitar state.nome do objeto.nome da variável, ex: state.view.enemy.
// 3. "document": Este é um objeto global que representa toda a página HTML carregada no navegador.Usado para acessar ou modificar elementos no DOM (Document Object Model). 
// 4. setInterval: Executa o código repetidamente após o intervalo especificado
// 5. textContent: usado para alterar ou ler o texto exibido nesse elemento.
// 6. forEach é um método que percorre cada item de uma coleção, como um array ou NodeList (ex:lista de elementos HTML selecionados em querySelector).
// 7. classList: propriedade que permite manipular as classes CSS de um elemento HTML. Adiciona, Remover ou verifica classes.
//EX: square.classList.remove("enemy") remove a classe "enemy" do elemento square

// Representa o estado do jogo, organizado em três objetos: view, values e actions.
const state = {
    // Variáveis relacionadas ao que aparece na tela (interface do jogo).
    view: {
        squares: document.querySelectorAll(".square"), // Seleciona todos os elementos com a classe "square"(querySelectoAll).
        enemy: document.querySelector(".enemy"), // Seleciona o elemento com a classe "enemy".
        timeLeft: document.querySelector("#time-left"), // Seleciona o elemento com o ID "time-left".
        score: document.querySelector("#score"), // Seleciona o elemento com o ID "score".
    },
    // Variáveis que armazenam valores e dados do jogo.
    values: {
        gameVelocity: 1000, // Velocidade do jogo em milissegundos.
        hitPosition: 0, // Posição atual do inimigo (identificada pelo ID do quadrado).
        result: 0, // Pontuação do jogador.
        curretTime: 60, // Tempo restante do jogo.
    },
    // Funções que executam ações específicas no jogo.
    actions: {
        timerId: setInterval(randomSquare, 1000), // Executa a função randomSquare a cada 1 segundo. 
        countDownTimerId: setInterval(countDown, 1000), // Executa a função countDown a cada 1 segundo.
    },
};

// Função para gerenciar o contador de tempo.
function countDown() {
    state.values.curretTime--; // Diminui 1 segundo do tempo restante.
    state.view.timeLeft.textContent = state.values.curretTime; // Atualiza o tempo exibido na tela.

    // Se o tempo acabar, finaliza o jogo.
    if (state.values.curretTime <= 0) {
        clearInterval(state.actions.countDownTimerId); // Para o contador de tempo.
        clearInterval(state.actions.timerId); // Para o sorteio de quadrados.
        alert("Game Over! O seu resultado foi: " + state.values.result); // Mostra a pontuação final em um alerta.
    }
}
// Função para adicionar um audio
function playSound(audioName){
    let audio = new Audio (`./src/audios/${audioName}.m4a`);
    audio.volume = 0.2;
    audio.play();
}

// Função para sortear um quadrado aleatório e adicionar o inimigo.
function randomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy"); // Remove a classe "enemy" de todos os quadrados.
    });

    let randomNumber = Math.floor(Math.random() * 9); // Gera um número aleatório entre 0 e 8.
    let randomSquare = state.view.squares[randomNumber]; // Seleciona um quadrado aleatório com base no número gerado.
    randomSquare.classList.add("enemy"); // Adiciona a classe "enemy" ao quadrado sorteado.
    state.values.hitPosition = randomSquare.id; // Armazena o ID do quadrado sorteado.
}

// Função para adicionar um evento de clique aos quadrados.
function addListenerHitBox() {
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            // Verifica se o quadrado clicado é o mesmo do inimigo.
            if (square.id === state.values.hitPosition) {
                state.values.result++; // Incrementa a pontuação.
                state.view.score.textContent = state.values.result; // Atualiza a pontuação exibida na tela.
                state.values.hitPosition = null; // Reseta a posição do inimigo.
                playSound("hit"); // chamando a função do audio quando ocorrer o evento "mousedown"
            }
        });
    });
}

// Função inicial para configurar o jogo.
function initialize() {
    addListenerHitBox(); // Configura os eventos de clique nos quadrados.
}

// Chama a função de inicialização para iniciar o jogo.
initialize();
