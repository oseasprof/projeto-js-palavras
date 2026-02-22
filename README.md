# Projeto JS Palavras

Um projeto interativo em JavaScript que utiliza a biblioteca **p5.js** para criar uma experiência visual dinâmica com palavras e emoticons aleatórios.

## 🎨 Descrição

Este projeto demonstra o uso de p5.js para criar gráficos interativos no navegador. A aplicação exibe emoticons aleatórios que aparecem progressivamente à medida que você move o mouse da esquerda para a direita da tela.

## 🛠️ Tecnologias Utilizadas

- **JavaScript** (65.9%) - Lógica principal da aplicação
- **HTML** (28.3%) - Estrutura da página
- **CSS** (5.8%) - Estilos e apresentação
- **p5.js** (v1.8.0) - Biblioteca para gráficos e interatividade

## 📂 Estrutura do Projeto

```
projeto-js-palavras/
├── index.html       # Arquivo principal HTML
├── sketch.js        # Lógica da aplicação em p5.js
├── style.css        # Estilos CSS
└── README.md        # Este arquivo
```

## 🎯 Funcionalidades

- **Seleção Aleatória**: Escolhe um emoticon aleatório de uma lista pré-definida
- **Interatividade com Mouse**: O movimento horizontal do mouse controla quantos caracteres do emoticon são exibidos
- **Design Visual**: Fundo azul com texto amarelo, centrado na tela
- **Função de Modo Noturno**: Função utilitária para detectar horário (após 18h)

### Emoticons Disponíveis

O projeto inclui uma variedade de emoticons ASCII:
- `(¬‿¬)` - Sorriso pícaros
- `(⌐■_■)` - Óculos legais
- `ᕦ(ò_óˇ)ᕤ` - Braços flexionados
- `ヾ(⌐■_■)ノ♪` - Dançando
- `(•_•)` - Neutro
- `(★‿★)` - Feliz
- `¯\_( ͡° ͜ʖ ͡°)_/¯` - Encolher de ombros

## 🚀 Como Usar

1. Clone ou faça o download do repositório:
```bash
git clone https://github.com/oseasprof/projeto-js-palavras.git
```

2. Abra o arquivo `index.html` em seu navegador web

3. Mova o mouse horizontalmente para revelar progressivamente o emoticon

## 📋 Detalhes Técnicos

### Funções Principais

#### `setup()`
Inicializa o canvas com dimensões 500x400 e seleciona um emoticon aleatório.

#### `palavraAleatoria()`
Retorna um emoticon aleatório da lista disponível.

#### `inicializaCores()`
Configura o fundo azul, cor de preenchimento amarela e tamanho/alinhamento do texto.

#### `palavraParcial(minimo, maximo)`
Calcula quantos caracteres do emoticon devem ser exibidos baseado na posição do mouse.

#### `draw()`
Função principal do p5.js que executa continuamente, renderizando o emoticon parcialmente visível.

#### `modoNoturno(horario)`
Função utilitária que verifica se é necessário ativar o modo noturno (após 18h).

## 💡 Como Funciona

1. Um emoticon é selecionado aleatoriamente no `setup()`
2. A cada frame, a posição do mouse é mapeada para um número entre 0 e o comprimento do emoticon
3. Apenas os caracteres correspondentes são exibidos na tela
4. Ao mover o mouse da esquerda para a direita, mais caracteres aparecem gradualmente

## 📝 Exemplo de Uso

O projeto está pronto para usar imediatamente após abrir `index.html`. Não há configuração adicional necessária.

## 🎓 Aprendizado

Este projeto é ótimo para aprender:
- Conceitos básicos de p5.js
- Manipulação de DOM com JavaScript
- Interatividade com eventos do mouse
- Trabalhando com strings em JavaScript
- Funções e escopo em JavaScript

## 📄 Licença

Este projeto é de código aberto e pode ser utilizado livremente para fins educacionais.

## 👨‍💻 Autor

Desenvolvido por **oseasprof**

---

**Divirta-se experimentando com os emoticons! 😄**