# 🚗 Desafio JavaScript - Ford

Um website interativo de apresentação de veículos da marca Ford, desenvolvido com HTML, CSS e JavaScript vanilla. O projeto oferece uma experiência visual completa com carrossel dinâmico, comparação de modelos e formulário de contato, demonstrando o domínio de manipulação do DOM e programação orientada a objetos em JavaScript.

---

## ✨ Funcionalidades Principais

- 🎠 **Carrossel Dinâmico** - Exibição automática de imagens com navegação por botões e auto-rotação a cada 3 segundos
- 🔄 **Comparação de Veículos** - Sistema que permite selecionar e comparar até 2 modelos Ford com especificações detalhadas
- 📋 **Formulário de Contato** - Coleta de dados de usuários com validação e feedback visual
- 📱 **Design Responsivo** - Interface adaptada para diferentes tamanhos de tela
- 🔗 **Navegação Multi-página** - Estrutura com página inicial, lançamentos e contato
- 📊 **Tabela Comparativa** - Visualização em pop-up com formatação de valores monetários em Real

---

## 🛠️ Tecnologias Utilizadas

- **HTML 5** - Estrutura semântica das páginas
- **CSS 3** - Estilização, layout flexível e animações
- **JavaScript ES6+** - Manipulação do DOM com classes e métodos estáticos
- **Intl API** - Formatação de números e moedas (localização pt-BR)
- **[Insira aqui tecnologias adicionais de build/deploy, se houver]**

---

## 📋 Pré-requisitos e Instalação

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor HTTP local (opcional, para melhor performance)

### Passos para Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/joaoribeiroodev/desafio-JavaScript.git
   cd desafio-JavaScript
   ```

2. **Abra o projeto:**
   - Opção 1 (Simples): Abra o arquivo `index.html` diretamente no navegador
   - Opção 2 (Recomendado): Use um servidor local Python
     ```bash
     python -m http.server 8000
     # ou
     python3 -m http.server 8000
     ```

3. **Acesse no navegador:**
   ```
   http://localhost:8000
   ```

---

## 📁 Estrutura de Pastas

```
desafio-JavaScript/
│
├── 📄 index.html              # Página inicial com carrossel
├── 📄 lancamento.html         # Página de lançamentos e comparação
├── 📄 contato.html            # Página de contato
├── 📄 README.md               # Este arquivo
│
├── 📁 css/                    # Estilos do projeto
│   ├── reset.css              # Reset/normalização CSS
│   ├── style.css              # Estilos globais e layout
│   ├── lancamento.css         # Estilos da página de lançamentos
│   └── form.css               # Estilos do formulário de contato
│
├── 📁 js/                     # Scripts JavaScript
│   ├── carousel.js            # Classe e lógica do carrossel
│   ├── compare.js             # Classe Car e funções de comparação
│   └── form.js                # Classe Contato e funções de formulário
│
├── 📁 img/                    # Imagens e recursos visuais
│   ├── logo-ford-256.png      # Logo Ford
│   ├── ford-96.png            # Ícone Ford
│   ├── imagem_1.jpg           # Imagem carrossel 1
│   ├── imagem_2.jpg           # Imagem carrossel 2
│   ├── imagem_3.jpg           # Imagem carrossel 3
│   ├── XL Cabine.jpg          # Modelo XL Cabine
│   ├── xls 2.2 diesel.jpg     # Modelo XLS
│   ├── storm.jpg              # Modelo Storm
│   ├── facebook-50.png        # Ícone Facebook
│   ├── instagram-logo-50.png  # Ícone Instagram
│   ├── youtube-squared-50.png # Ícone YouTube
│   └── info.png               # Ícone de informações
│
└── 📄 .gitignore              # Configuração Git

```

---

## 🚀 Como Usar

### Página Inicial (index.html)
1. Visualize o carrossel automático que alterna imagens a cada 3 segundos
2. Clique nos botões de navegação (dots) para mudar slides manualmente
3. Acesse os links nas imagens para ir até a página de lançamentos

### Página de Lançamentos (lancamento.html)
1. Veja os modelos disponíveis da Ford
2. Selecione dois modelos usando as checkboxes
3. Clique em "Comparar Carros" para visualizar a tabela comparativa
4. Análise detalhada de especificações como motor, potência, capacidade de carga, etc.

### Página de Contato (contato.html)
1. Preencha o formulário com seus dados pessoais
2. Selecione o tipo de contato (Elogio, Reclamação ou Sugestão)
3. Clique em "Enviar" para registrar sua mensagem
4. Receba confirmação com seu nome exibida

---

## 📖 Notas de Desenvolvimento

- O projeto utiliza **Programação Orientada a Objetos** com classes JavaScript (Carousel, Car, Contato)
- Métodos estáticos gerenciam o estado global do carrossel
- A manipulação do DOM é feita através de `getElementById()` e `querySelectorAll()`
- Dados de contato são capturados e exibidos via `console.log` (integração de backend não implementada)
- Layout utiliza Flexbox e CSS Grid para responsividade

---

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Relatar bugs
- Sugerir melhorias
- Fazer pull requests

---

## 📝 Licença

[Insira aqui informações sobre licença]

---

## 👨‍💻 Autor

**João Ribeiro**  
GitHub: [@joaoribeiroodev](https://github.com/joaoribeiroodev)

---

## 📅 Informações do Projeto

- **Criado em:** [Insira aqui a data de criação]
- **Última atualização:** 25 de maio de 2026
- **Tipo:** Desafio de Aprendizado em JavaScript
