# Tokens de visual — Ilha Imports

Loja de moda fitness (feminino e masculino) da Ilha Imports, São Luís/MA.
Identidade tirada do Instagram @ilhaimports8: logo com letras "ILHA" douradas
contornadas de preto, sol com raios e um "olho" dourado, faixa preta "IMPORTS";
ícones dos destaques em laranja-dourado sobre círculo branco.
Estrutura copiada do catálogo Amira Closet. Tokens em `:root` de `css/loja.css`;
as 5 cores editáveis pelo painel (aba Aparência) têm o padrão em `CORES` (`js/appearance.js`).

## Cores

| Token | Valor | Uso |
|---|---|---|
| `--bg` / `--bg-2` | `#f6f4ef` / `#ece8df` | fundo geral e seções secundárias |
| `--surface` | `#ffffff` | cards, inputs |
| `--txt` / `--txt-2` / `--txt-3` | `#141414` / `#4a4846` / `#64615c` | texto |
| `--brand` | `#f2a81d` | dourado do logo — fundo dos botões (texto **preto** por cima) |
| `--brand-2` | `#946000` | dourado escuro — preços e links sobre fundo claro |
| `--accent` | `#c25e00` | laranja — selo de % OFF |
| `--ouro` | `#f5b324` | dourado vivo — só sobre fundo escuro (faixa de avisos, hero, anel das linhas) |
| `--ink` | `#141414` | preto do logo — faixa de avisos, fundo do hero |
| `--wa` | `#25d366` | verde do WhatsApp |

Dourado claro sobre fundo claro não tem contraste para texto — por isso preço e
links usam `--brand-2`. Quando a dona muda a cor principal pelo painel, o
`--brand-2` é derivado automaticamente (a cor escolhida misturada com preto).

## Tipografia

- **Barlow Condensed** (`--serif`, nome herdado): títulos, hero, nome da loja — 700/800, itálico, caixa-alta.
- **Barlow** (`--sans`): texto corrido, botões, preços.

## Imagens (SVG, recriadas a partir do Instagram)

- `img/logo.svg` — logo completa (sol + olho + ILHA + faixa IMPORTS). Login do painel.
- `img/marca.svg` — só o sol/olho sobre quadrado preto. Header e favicon.
- `img/banner.svg` — fundo padrão do hero (preto com sol dourado); a dona troca pela aba Aparência.
- `img/feminino.svg` / `img/masculino.svg` — círculos das linhas, no estilo dos destaques do Instagram.
- O logo é uma recriação vetorial; se a loja tiver o arquivo original em alta, vale substituir.

## Textos da loja

Em `js/config.js` (`CONFIG_PADRAO`): slogan "A Ilha Imports é sua, é única!", entrega em
até 1h em São Luís, Lj 06 New Center – Maranhão Novo, Instagram @ilhaimports8.
**WhatsApp ainda é provisório** (`5500000000000`).
