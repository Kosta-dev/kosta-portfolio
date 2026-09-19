# Kosta Portfolio

Site pessoal de portfólio de **Pedro Costa** — Desenvolvedor Web & Mobile, estudante de Ciências da Computação. Uma página única (*single page*), escura, responsiva e animada, construída com **React 19**, **TypeScript** e **Vite**, sem bibliotecas de UI nem de CSS: todo o estilo é CSS puro.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-10-4B32C3?logo=eslint&logoColor=white)

## Sumário

- [Visão geral](#visão-geral)
- [Tecnologias](#tecnologias)
- [Começando](#começando)
- [Scripts disponíveis](#scripts-disponíveis)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Arquitetura e funcionamento](#arquitetura-e-funcionamento)
- [Como personalizar o conteúdo](#como-personalizar-o-conteúdo)
- [Convenções de nomenclatura](#convenções-de-nomenclatura)
- [Estilos (CSS)](#estilos-css)
- [Acessibilidade](#acessibilidade)
- [Qualidade de código](#qualidade-de-código)
- [Deploy](#deploy)
- [Pontos de atenção e melhorias sugeridas](#pontos-de-atenção-e-melhorias-sugeridas)
- [Licença](#licença)
- [Contato](#contato)

---

## Visão geral

O site é uma página de rolagem única com cinco áreas, navegáveis pelo menu fixo no topo:

| Seção | Âncora | O que mostra |
|---|---|---|
| Hero | `#hero` | Apresentação: nome, cargo ("Desenvolvedor Web & Mobile"), stack principal e imagem de fundo. |
| Sobre mim | `#about` | Resumo acadêmico e três cartões de qualificações (escolaridade, inglês, graduação). |
| Competências | `#skills` | Carrossel infinito de tecnologias + acordeão com as áreas Front-end, Back-end e Mobile. |
| Experiência | `#experience` | Carrossel com projetos e experiências profissionais (G-Force Coach e BGF Consultoria). |
| Contato | `#contact` | Chamada para contato por e-mail (`mailto:`). |

**Destaques técnicos**

- Conteúdo orientado a dados: textos, projetos e qualificações vivem em *arrays* tipados no topo do `App.tsx`.
- Animação de revelação ao rolar a página (`IntersectionObserver`), com atraso escalonado nos cartões.
- Carrossel de experiências com animação de saída e entrada direcional.
- Carrossel de tecnologias em *loop* infinito com ícones SVG desenhados à mão, sem dependência externa.
- Menu responsivo (hambúrguer abaixo de 760 px) e suporte a `prefers-reduced-motion`.

---

## Tecnologias

**Dependências de produção**

| Pacote | Versão | Uso |
|---|---|---|
| `react` / `react-dom` | ^19.2.8 | Interface. |
| `lucide-react` | ^1.45.0 | Ícones da interface (setas, menu, `+`/`−`, link externo). |
| `react-icons` | ^5.7.0 | Instalado, mas **não é usado** no código atual (veja [melhorias](#pontos-de-atenção-e-melhorias-sugeridas)). |

**Ferramentas de desenvolvimento**

| Pacote | Versão | Uso |
|---|---|---|
| `vite` | ^8.3.0 | Servidor de desenvolvimento e *bundler*. |
| `@vitejs/plugin-react` | ^6.1.1 | Suporte a React no Vite (Fast Refresh). |
| `typescript` | ~6.0.2 | Tipagem estática. |
| `eslint` + `typescript-eslint` | ^10.10.0 / ^8.69.0 | Análise estática. |
| `eslint-plugin-react-hooks` | ^7.1.1 | Regras dos Hooks. |
| `eslint-plugin-react-refresh` | ^0.5.6 | Regras para o Fast Refresh do Vite. |
| `@types/react`, `@types/react-dom`, `@types/node`, `@eslint/js`, `globals` | — | Tipos e configuração do ESLint. |

---

## Começando

### Pré-requisitos

- **Node.js** `^20.19.0` ou `>=22.13.0` (exigência combinada do Vite 8 e do ESLint 10)
- **npm** (o projeto usa `package-lock.json`)

### Instalação e execução

```bash
# 1. Clonar o repositório
git clone https://github.com/Kosta-dev/kosta-portfolio.git
cd kosta-portfolio

# 2. Instalar as dependências (instalação reprodutível, respeita o package-lock.json)
npm ci

# 3. Iniciar o servidor de desenvolvimento
npm run dev
```

O Vite mostra no terminal o endereço local (por padrão, `http://localhost:5173`). As alterações são refletidas no navegador em tempo real (HMR).

### Gerar a versão de produção

```bash
npm run build     # verifica os tipos e gera a pasta dist/
npm run preview   # serve o conteúdo de dist/ localmente para conferência
```

---

## Scripts disponíveis

| Comando | O que faz |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento do Vite com HMR. |
| `npm run build` | Executa `tsc -b` (checagem de tipos) e depois `vite build`. Falha se houver erro de tipo. |
| `npm run lint` | Roda o ESLint em todo o projeto (a pasta `dist` é ignorada). |
| `npm run preview` | Serve localmente o resultado do build. |

---

## Estrutura do projeto

```
kosta-portfolio/
├── index.html                # Documento HTML base (lang="pt-BR"), ponto de montagem #root
├── package.json              # Dependências e scripts
├── package-lock.json
├── vite.config.ts            # Configuração do Vite (apenas o plugin do React)
├── eslint.config.js          # ESLint 10 em formato flat config
├── tsconfig.json             # Raiz: referencia os dois projetos abaixo
├── tsconfig.app.json         # TypeScript do código em src/
├── tsconfig.node.json        # TypeScript do vite.config.ts
├── public/                   # Arquivos servidos como estão, na raiz do site
│   ├── favicon.svg           # Favicon (referenciado no index.html)
│   ├── icons.svg
│   ├── city-lights.jpg
│   ├── earth-horizon.jpg
│   └── orbital-airglow.jpg
└── src/
    ├── main.tsx              # Ponto de entrada: monta <App /> dentro de <StrictMode>
    ├── App.tsx               # Página inteira: dados, estado, efeitos e JSX de todas as seções
    ├── App.css               # Todo o estilo da aplicação
    ├── components/
    │   └── techcarousel.tsx  # Carrossel infinito de tecnologias (ícones SVG inline)
    └── Assets/               # Imagens importadas pelo código (processadas pelo Vite)
        ├── background_image.jpeg   # Fundo do hero (usado no CSS)
        ├── gforce_logo.jpg         # Imagem do projeto G-Force Coach
        └── bgf_consultoria.jpeg    # Imagem da experiência na BGF Consultoria
```

> **`public/` × `src/Assets/`** — arquivos em `src/Assets/` são importados no código (ou referenciados no CSS) e passam pelo Vite, que gera nomes com *hash* para cache. Arquivos em `public/` são copiados sem alteração para a raiz do site.

---

## Arquitetura e funcionamento

### Fluxo de renderização

```
index.html  →  src/main.tsx  →  <App />  →  seções (hero, about, skills, experience, contact)
                                              └── <TechCarousel /> (dentro de "Competências")
```

`main.tsx` monta `<App />` dentro de `<StrictMode>` em `#root`. O `App` é um único componente que renderiza o cabeçalho e as cinco seções.

### Modelos de dados (`App.tsx`)

O conteúdo do site é definido por três coleções tipadas. Para alterar textos, basta editar esses *arrays*.

```ts
type SkillArea = {
  title: string          // "Front-end", "Back-end", "Mobile"
  description: string    // texto exibido ao expandir a área
  technologies: string[] // rótulos exibidos nos "tiles"
}

type Experience = {
  title: string
  description: string
  imageAlt: string       // texto alternativo da imagem
  url: string            // link do botão "Veja mais"
  imageSrc: string       // imagem importada de src/Assets
}

type Qualification = {
  category: string       // "Escolaridade", "Inglês", "Graduação"
  details: string        // descrição e data de conclusão
}
```

| Coleção | Alimenta | Seção |
|---|---|---|
| `qualifications` | Cartões de qualificações | Sobre mim |
| `skillAreas` | Acordeão de áreas técnicas | Competências |
| `experiences` | Carrossel de experiências | Experiência |

### Estado do componente `App`

| Estado / referência | Tipo | Função |
|---|---|---|
| `isMenuOpen` | `boolean` | Abre e fecha o menu no layout móvel. |
| `activeSkillIndex` | `number \| null` | Índice da área de competência expandida. Só uma fica aberta por vez; clicar na aberta a fecha. |
| `currentExperienceIndex` | `number` | Experiência exibida no carrossel. |
| `slideDirection` | `'next' \| 'prev'` | Direção da animação (define as classes `experience-card--next/prev`). |
| `isExiting` | `boolean` | `true` durante a animação de saída; bloqueia novos cliques e desabilita as setas. |
| `exitTimeoutRef` | `ref<number>` | Guarda o `setTimeout` da transição para limpá-lo ao desmontar. |

### Carrossel de experiências

A troca de experiência acontece em duas fases, coordenadas entre o React e o CSS:

1. O clique chama `changeExperience(direction)`. Se já houver uma transição em andamento (`isExiting`) ou o destino estiver fora dos limites, nada acontece.
2. O estado muda para `isExiting = true` e a classe `is-exiting` dispara a animação de **saída** (0,25 s).
3. Após `EXPERIENCE_EXIT_DURATION_MS` (250 ms), o índice é atualizado. Como o `<article>` usa `key={currentExperienceIndex}`, o React o **remonta**, o que dispara a animação de **entrada** (0,5 s) na direção correta.
4. As setas só aparecem quando existe experiência anterior (`hasPreviousExperience`) ou seguinte (`hasNextExperience`).

> **Importante:** `EXPERIENCE_EXIT_DURATION_MS` no `App.tsx` deve ser igual à duração da animação `.experience-card.is-exiting` no `App.css` (0,25 s). Se mudar um, mude o outro.

As imagens de todas as experiências são pré-carregadas em um `useEffect` para evitar o "piscar" ao trocar de item. A região do carrossel usa `aria-live="polite"` para que leitores de tela anunciem a mudança.

### Revelação ao rolar (*reveal on scroll*)

Um `useEffect` seleciona todos os elementos com a classe `.reveal` e usa um `IntersectionObserver` (`rootMargin: 0px 0px -12% 0px`, `threshold: 0.16`):

- O elemento nasce invisível e deslocado 28 px para baixo, e ao entrar na tela recebe a classe `is-visible`, que o revela.
- A classe `reveal-ready` é adicionada ao `<html>` só depois que o JavaScript carrega. Assim, sem JS, o conteúdo continua visível.
- Se o navegador não suportar `IntersectionObserver`, todos os elementos são revelados de imediato.
- Cada elemento é observado só uma vez (`unobserve` após a primeira revelação).
- Os cartões de qualificações usam a variável CSS `--reveal-delay` (90 ms × índice) para entrar em sequência.

### `TechCarousel`

Componente em `src/components/techcarousel.tsx` que exibe as tecnologias em uma faixa contínua:

- A lista `TECHS` contém **14 tecnologias**: React, TypeScript, JavaScript, Node.js, Python, HTML5, CSS3, Vue, Angular, Git, Docker, GraphQL, Tailwind e MongoDB.
- Cada item tem `name`, `color` (cor da marca) e `icon` (elementos SVG em `viewBox="0 0 24 24"`, sem arquivos de imagem).
- A lista é **duplicada** (`[...TECHS, ...TECHS]`) e a faixa se desloca `-50%` em *loop* linear de 34 s, o que cria a ilusão de rolagem infinita.
- Os ícones ficam em escala de cinza e ganham a cor da marca ao passar o mouse; a animação pausa no `hover`.
- O componente é decorativo e usa `aria-hidden="true"`.

### Mapa de navegação

| Link do menu | Destino |
|---|---|
| Sobre mim | `#hero` |
| Competências | `#skills` |
| Experiência | `#experience` |
| Contato | `#contact` |
| Botão "Email" | `#contact` |
| Seta do hero (*scroll cue*) | `#about` |
| Nome "Pedro Costa" | `#top` |

O `App.css` define `scroll-behavior: smooth` e `scroll-margin-top: 120px` em todo elemento com `id`, para que o cabeçalho fixo não cubra os títulos ao navegar.

---

## Como personalizar o conteúdo

### Editar textos existentes

Altere diretamente os *arrays* `skillAreas`, `experiences` e `qualifications` em `src/App.tsx`. Para textos fixos (nome, título do hero, contato), edite o JSX correspondente.

### Adicionar uma experiência

1. Coloque a imagem em `src/Assets/`.
2. Importe-a no topo do `App.tsx` (convenção `camelCase`):
   ```ts
   import meuProjetoImagem from './Assets/meu_projeto.jpg'
   ```
3. Acrescente um objeto em `experiences`:
   ```ts
   {
     title: 'Nome do projeto',
     description: 'O que foi feito e com quais tecnologias.',
     imageAlt: 'Descrição da imagem',
     url: 'https://exemplo.com',
     imageSrc: meuProjetoImagem,
   },
   ```

As setas do carrossel passam a aparecer automaticamente quando houver mais de um item.

### Adicionar uma área de competência

Inclua um objeto em `skillAreas` com `title`, `description` e a lista `technologies`. Cada tecnologia vira um *tile* no acordeão.

### Adicionar uma tecnologia ao carrossel

Em `src/components/techcarousel.tsx`, acrescente um item em `TECHS`:

```tsx
{
  name: "Next.js",
  color: "#FFFFFF",
  icon: (
    <g fill="none" stroke="currentColor" strokeWidth={1.5}>
      {/* desenhe o ícone em uma grade de 24×24 */}
    </g>
  ),
},
```

Use `currentColor` no traço/preenchimento: a cor da marca é aplicada pelo componente.

### Trocar a imagem de fundo do hero

Substitua o arquivo `src/Assets/background_image.jpeg` (ou altere o caminho na regra `.hero-media` do `App.css`).

### Alterar cores e tipografia

As cores estão escritas diretamente no `App.css` (não há *design tokens*). Os principais valores são:

| Uso | Valor |
|---|---|
| Texto principal | `#f6f4ee` |
| Fundos de seção | `#070707`, `#050505` e degradês entre `#090909` e `#1d1d1c` |
| Destaque dos links de projeto | `#d8fff4` |
| Fonte | `Inter`, com *fallback* para `system-ui` |

---

## Convenções de nomenclatura

O código segue estas regras para manter os nomes coerentes com o domínio (portfólio pessoal):

| Elemento | Convenção | Exemplos |
|---|---|---|
| Tipos | `PascalCase`, substantivos do domínio | `SkillArea`, `Experience`, `Qualification`, `SlideDirection` |
| Coleções de dados | `camelCase`, plural | `skillAreas`, `experiences`, `qualifications` |
| Constantes globais | `UPPER_SNAKE_CASE`, com unidade no nome | `EXPERIENCE_EXIT_DURATION_MS` |
| Estados booleanos | prefixo `is` / `has` | `isMenuOpen`, `isExiting`, `hasNextExperience` |
| Funções | verbo + objeto; `handle…` para eventos | `changeExperience`, `handleNextExperience` |
| Imports de imagem | `camelCase` | `gforceLogo`, `bgfConsultoriaLogo` |
| Classes CSS | `kebab-case`, `bloco-elemento` | `experience-card`, `skill-toggle`, `qualification-card` |
| Modificadores e estados CSS | `--modificador` e `is-…` | `experience-card--next`, `is-exiting`, `is-visible` |
| Variáveis CSS | `--kebab-case` | `--reveal-delay`, `--experience-image` |
| Âncoras (`id`) | `kebab-case`, iguais ao nome da seção | `#about`, `#skills`, `#experience` |

Os arquivos em `src/Assets/` e `src/components/` ainda usam `snake_case` e minúsculas; ao renomeá-los, atualize também os *imports* e as URLs no CSS.

---

## Estilos (CSS)

Todo o estilo está em `src/App.css`, organizado de cima para baixo:

1. **Base:** *reset*, `:root`, tipografia, âncoras e a mecânica de `.reveal`.
2. **Layout por seção:** `page-shell`, `site-header`, `hero-*`, `about-section`, `skills-section`, `experience-section`, `contact-section`.
3. **Componentes:** cartões de qualificação, acordeão (`skill-*`), *tiles* de tecnologia, cartão de experiência, botão de e-mail.
4. **Responsividade:** três pontos de quebra.
5. **Carrossel de tecnologias:** classes `tech-*` (usadas por `techcarousel.tsx`).
6. **Carrossel de experiência:** posicionamento, setas e *keyframes* de entrada e saída.

### Pontos de quebra

| Largura máxima | Mudanças principais |
|---|---|
| `1040px` | Cabeçalho mais compacto; "Competências" passa para uma coluna. |
| `760px` | Menu hambúrguer; grades em uma coluna; hero menor. |
| `460px` | Títulos e *tiles* menores; tecnologias em uma coluna. |

### Animações

| Animação | Onde | Duração |
|---|---|---|
| `fadeIn` | Entrada da página e dos elementos revelados | 0,5 s / 0,7 s |
| Revelação (`.reveal` → `.is-visible`) | Seções e cartões | 0,7 s |
| `experience-enter-from-right/left` | Entrada do cartão de experiência | 0,5 s |
| `experience-exit-to-left/right` | Saída do cartão de experiência | 0,25 s |
| `tech-scroll` | Carrossel de tecnologias | 34 s, linear, infinito |

Todas as animações são desativadas dentro de `@media (prefers-reduced-motion: reduce)`.

---

## Acessibilidade

- Seções com `aria-labelledby` apontando para o título correspondente.
- Botão de menu com `aria-label`, `aria-controls` e `aria-expanded` atualizados conforme o estado.
- Acordeão de competências com `aria-expanded` em cada gatilho.
- Setas do carrossel com `aria-label` ("Projeto anterior" / "Próximo projeto") e `disabled` durante a transição.
- Imagem de experiência exposta como `role="img"` com texto alternativo (`imageAlt`).
- Carrossel de tecnologias marcado como decorativo (`aria-hidden`).
- Respeito a `prefers-reduced-motion`.
- Documento em português (`<html lang="pt-BR">`).

---

## Qualidade de código

- **TypeScript** com `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`, `verbatimModuleSyntax` e `noFallthroughCasesInSwitch`. O `npm run build` interrompe se houver erro de tipo.
- **ESLint** (*flat config*) com as regras recomendadas de JavaScript e TypeScript, mais `react-hooks` e `react-refresh`.
- Estado atual: `npm ci`, `npm run lint` e `npm run build` executam **sem erros**.
- O projeto ainda **não tem testes automatizados** nem *pipeline* de CI.

---

## Deploy

O resultado de `npm run build` é um site 100 % estático na pasta `dist/`, que pode ser hospedado em qualquer serviço de arquivos estáticos (Vercel, Netlify, Cloudflare Pages, GitHub Pages etc.).

| Configuração | Valor |
|---|---|
| Comando de build | `npm run build` |
| Pasta de saída | `dist` |
| Versão do Node | 20.19+ ou 22.13+ |

**GitHub Pages em subcaminho** (`usuario.github.io/kosta-portfolio/`): defina a base no `vite.config.ts`:

```ts
export default defineConfig({
  base: '/kosta-portfolio/',
  plugins: [react()],
})
```

Em hospedagens baseadas em Linux, o nome de arquivos e pastas diferencia maiúsculas de minúsculas: mantenha `Assets` (com "A" maiúsculo) igual nos *imports* e no CSS.

---

## Pontos de atenção e melhorias sugeridas

Itens identificados na leitura do código, ordenados do mais simples ao mais trabalhoso.

**Conteúdo e metadados**

- [ ] O `<title>` do `index.html` ainda é `WebTech Landing Page` (sobra de modelo). Sugestão: `Pedro Costa — Desenvolvedor Web & Mobile`.
- [ ] Não há `meta description` nem tags Open Graph; ambas melhoram buscas e a prévia ao compartilhar o link.
- [ ] Erros de digitação nos textos: `TailywindCSS`, `Estagio`, `informatica` (2×), "Projetos e serviços de relevantes" e "Sempre em busca e soluções logicas".
- [ ] O link "Sobre mim" do menu aponta para `#hero`; a seção chamada "Sobre mim" é a `#about`.
- [ ] O carrossel de tecnologias lista Python, Vue, Angular, GraphQL e MongoDB, que não aparecem nas áreas de competência. Vale alinhar as duas listas.

**Limpeza**

- [ ] O campo `name` do `package.json` é `portifolio-kosta` (grafia com "i"); o correto seria `portfolio-kosta` ou `kosta-portfolio`.
- [ ] A dependência `react-icons` não é importada em nenhum arquivo. Pode ser removida com `npm uninstall react-icons`.
- [ ] Em `public/`, `city-lights.jpg`, `earth-horizon.jpg`, `orbital-airglow.jpg` e `icons.svg` não são referenciados. Somam cerca de 560 KB e são copiados para `dist/` mesmo assim.
- [ ] A fonte `Inter` está declarada no CSS, mas não é carregada por nenhum `<link>` ou `@font-face`. Sem ela instalada no aparelho, o navegador usa a fonte do sistema.
- [ ] Em `.technology-tile`, o `background-image` com `var(--technology-image)` é sobrescrito mais adiante por `background-image: none`; a variável nunca é definida. É código sem efeito.
- [ ] O `README.md` original era o modelo padrão do Vite; este documento o substitui.

**Evolução**

- [ ] Adicionar um arquivo `LICENSE`.
- [ ] Extrair seções (`Header`, `Hero`, `Skills`, `Experience`, `Contact`) e os dados para arquivos próprios, deixando o `App.tsx` mais curto.
- [ ] Adicionar testes (por exemplo, Vitest + Testing Library) para o carrossel e o acordeão.
- [ ] Configurar CI (GitHub Actions) rodando `npm ci`, `npm run lint` e `npm run build` a cada *push*.

---

## Licença

O repositório ainda não possui arquivo de licença; sem ele, todos os direitos permanecem com o autor. Para permitir o reuso do código, adicione uma licença (por exemplo, MIT).

---

## Contato

**Pedro Costa** — Desenvolvedor Web & Mobile

- GitHub: [@Kosta-dev](https://github.com/Kosta-dev)
- E-mail: [ph.costa0305@gmail.com](mailto:ph.costa0305@gmail.com)
