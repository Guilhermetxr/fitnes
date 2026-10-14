# Tokens de visual — Vibe Fit

Loja de moda fitness (feminino e masculino). Estrutura copiada do catálogo
Amira Closet; só a identidade mudou. Tom: energia de academia, contraste forte,
tipografia condensada em itálico. Os tokens ficam em `:root` de `css/loja.css`;
o painel (`css/admin.css`) reaproveita os mesmos. As 5 cores editáveis pelo painel
(aba Aparência) têm o padrão em `CORES` (`js/appearance.js`).

## Cores

| Token | Valor | Uso |
|---|---|---|
| `--bg` / `--bg-2` | `#f2f2ee` / `#e7e8e2` | fundo geral e seções secundárias (off-white frio) |
| `--surface` / `--surface-2` | `#ffffff` / `#e9eae4` | cards, inputs, hover |
| `--line` / `--line-2` | `rgba(20,22,20,.12 / .26)` | bordas |
| `--txt` / `--txt-2` / `--txt-3` | `#141614` / `#4a4d52` / `#62666b` | texto grafite |
| `--brand` / `--brand-2` | `#2b50ff` / `#1a37d6` | azul elétrico — botões, links, preço |
| `--accent` | `#d4380f` | coral — selo de % OFF, palavra destacada no título |
| `--volt` | `#c8f031` | verde volt — assinatura; **só sobre fundo escuro** (faixa de avisos, hero, anel das linhas) |
| `--ink` | `#141614` | preto da marca — faixa de avisos, fundo do hero |
| `--wa` | `#25d366` | verde do WhatsApp |

Contraste: branco sobre `--brand` ≈ 5,6:1; `--accent` sobre branco ≈ 4,6:1;
volt sobre `--ink` ≈ 14:1. Volt sobre fundo claro **não** passa — não usar.

## Tipografia

- **Barlow Condensed** (`--serif`, nome herdado da estrutura): títulos, hero, nome da loja —
  peso 700/800, itálico e caixa-alta.
- **Barlow** (`--sans`): texto corrido, botões, preços, rótulos.

## Imagens (todas SVG, editáveis)

- `img/marca.svg` — ícone "V" volt sobre preto. Header e favicon.
- `img/logo.svg` — logo completa. Login do painel.
- `img/banner.svg` — fundo padrão do hero (a dona troca pela aba Aparência).
- `img/feminino.svg` / `img/masculino.svg` — círculos das duas linhas na home.
- Fotos de produto: proporção **4:5** (retrato).

## Linhas e categorias

Toda categoria pertence a uma linha: **Feminino** ou **Masculino** (`LINHAS` em `js/db.js`).
Categorias de exemplo: Leggings, Tops, Conjuntos, Shorts (feminino);
Camisetas & Regatas, Bermudas (masculino). Tamanhos sugeridos no painel: `PP–XG` e `34–44`.

## Textos de exemplo a revisar

Nome "Vibe Fit", avisos, frase do hero e WhatsApp (`5500000000000`) são provisórios —
estão em `js/config.js` (`CONFIG_PADRAO`) e podem ser trocados pelo painel.
