# 🎮 Jogo de Clique - Mario

Um jogo interativo desenvolvido como parte de um passo a passo oferecido pela DIO, inicialmente com o tema do Detona Ralph, que foi adaptado para Mario Bros.
O objetivo é clicar no inimigo que aparece aleatoriamente dentro de um tempo de 60 segundos, acumulando a maior pontuação possível.

---

## 🚀 Funcionalidades

- **Tempo limitado**: O jogo dura 60 segundos.
- **Pontuação**: Conta os cliques corretos no inimigo.
- **Aparição aleatória**: O inimigo muda de posição aleatoriamente a cada segundo.
- **Áudio interativo**: Sons são reproduzidos ao clicar no inimigo para maior imersão.

---

## 💻 Tecnologias e Conceitos Utilizados

O projeto foi desenvolvido utilizando as seguintes tecnologias e conceitos fundamentais:

- **HTML5**: 
  - Estruturação semântica do jogo.
  - Elementos dinâmicos e organizados para interatividade.

- **CSS3**: 
  - Estilização e design responsivo.
  - Uso de classes para alternar estilos com base nos eventos do jogo.

- **JavaScript**: 
  - **Manipulação do DOM**: Seleção e alteração de elementos com `querySelector` e `querySelectorAll`.
  - **Estruturas organizadas**: Uso de objetos para gerenciar o estado do jogo (view, values e actions).
  - **Eventos com Listener**: Adição de eventos de clique nos quadrados usando `addEventListener` e manipulação do comportamento via `mousedown`.
  - **Hitbox**: Detecção de cliques na área específica do inimigo.
  - **Intervalos**: Uso de `setInterval` para ações repetitivas (movimentação do inimigo e contagem de tempo).
  - **Manipulação de classes**: Adição e remoção de classes CSS com `classList` para alterar a aparência e funcionalidade do jogo.
  - **Áudio dinâmico**: Função para reproduzir sons ao interagir com elementos.

---

## 📌 Aprendizados

Durante o desenvolvimento deste projeto, foi possível aprofundar-se em:

1. **Eventos e Listeners**: Compreensão de como adicionar eventos a elementos HTML usando `addEventListener` para capturar interações do usuário (como cliques) e responder de forma programada.
2. **Hitbox e detecção de interações**: Identificação precisa de áreas clicáveis, verificando se o ID do elemento clicado corresponde à posição do inimigo.
3. **Organização do código com objetos**: Divisão do estado do jogo em três categorias principais (view, values e actions), facilitando manutenção e expansão.
4. **Manipulação de tempo com `setInterval`**: Criação de loops temporizados para movimentação aleatória do inimigo e contagem regressiva.
5. **Feedback sonoro**: Uso de sons para melhorar a imersão e tornar o jogo mais dinâmico.
6. **Planejamento de melhorias**: Identificação de pontos que podem ser aprimorados para aumentar a jogabilidade e a complexidade.

---

## 🎯 Próximas Melhorias

1. **Contador de Vidas**: Adicionar um contador de vidas ao jogo, onde o jogador perde uma vida quando chega ao Game Over.
2. **Histórico de Melhor Pontuação**: Exibir a melhor pontuação atingida para cada rodada (com base no número de vidas).
3. **Animações do Inimigo**: Implementar transições animadas para o inimigo.
4. **Tabela de Recordes**: Permitir que o jogador visualize as pontuações mais altas.
5. **Botão de Reiniciar**: Adicionar um botão para reiniciar o jogo sem precisar recarregar a página.

---
## Sinta-se à vontade para explorar, testar e contribuir!