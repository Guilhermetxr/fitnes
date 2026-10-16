/* ============================================================
   DADOS DE DEMONSTRAÇÃO
   Usados só quando o Firebase ainda não foi configurado, para que
   o site já abra com conteúdo. Assim que a loja for populada pelo
   painel, esses dados deixam de aparecer.
   As imagens são desenhadas em SVG (nenhum arquivo externo).
   ============================================================ */

/* silhuetas 400x500 — cada peça é um único contorno preenchido */
const FORMAS = {
  legging: {
    d: "M140 70 L260 70 L272 430 L222 430 L202 190 L198 190 L178 430 L128 430 Z",
    linhas: "M140 100 L260 100",
  },
  top: {
    d: "M150 120 L170 120 Q185 200 200 205 Q215 200 230 120 L250 120 L262 250 Q268 300 260 320 L140 320 Q132 300 138 250 Z",
    linhas: "M140 290 L260 290",
  },
  short: {
    d: "M130 160 L270 160 L282 330 L212 330 L200 250 L188 330 L118 330 Z",
    linhas: "M130 186 L270 186",
  },
  conjunto: {
    d: "M160 70 L176 70 Q188 128 200 132 Q212 128 224 70 L240 70 L250 166 L150 166 Z M146 190 L254 190 L264 440 L222 440 L202 270 L198 270 L178 440 L136 440 Z",
    linhas: "M146 214 L254 214",
  },
  camiseta: {
    d: "M150 120 L92 156 L118 220 L150 204 L150 390 L250 390 L250 204 L282 220 L308 156 L250 120 Q236 152 200 152 Q164 152 150 120 Z",
    linhas: "M150 360 L250 360",
  },
  regata: {
    d: "M160 100 L182 100 Q190 160 200 160 Q210 160 218 100 L240 100 Q244 160 278 190 L278 400 L122 400 L122 190 Q156 160 160 100 Z",
    linhas: "M122 370 L278 370",
  },
  bermuda: {
    d: "M124 120 L276 120 L292 370 L214 370 L200 240 L186 370 L108 370 Z",
    linhas: "M124 148 L276 148",
  },
};

/** Gera a imagem de uma peça (data URI) para os produtos de exemplo. */
function peca(tipo, cor, detalhe = "") {
  const f = FORMAS[tipo];
  /* faixa esportiva na diagonal, recortada pelo contorno da peça */
  const faixa = detalhe
    ? `<g clip-path="url(#peca)" fill="${detalhe}" transform="rotate(-18 200 260)">
        <rect x="-60" y="236" width="520" height="22"/><rect x="-60" y="270" width="520" height="7"/>
      </g>`
    : "";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#f1eee7"/><stop offset="1" stop-color="#e2ddd1"/>
      </linearGradient>
      <clipPath id="peca"><path d="${f.d}"/></clipPath>
    </defs>
    <rect width="400" height="500" fill="url(#bg)"/>
    <circle cx="200" cy="470" r="150" fill="#f5b324" opacity=".22"/>
    <path d="${f.d}" fill="${cor}" fill-rule="evenodd" stroke="#00000018" stroke-width="2" stroke-linejoin="round"/>
    ${faixa}
    <path d="${f.linhas}" stroke="#ffffff55" stroke-width="3" fill="none"/>
  </svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

export const CATEGORIAS_DEMO = [
  { id: "leggings", nome: "Leggings", slug: "leggings", linha: "feminino", ordem: 1, ativa: true },
  { id: "tops", nome: "Tops", slug: "tops", linha: "feminino", ordem: 2, ativa: true },
  { id: "conjuntos", nome: "Conjuntos", slug: "conjuntos", linha: "feminino", ordem: 3, ativa: true },
  { id: "shorts", nome: "Shorts", slug: "shorts", linha: "feminino", ordem: 4, ativa: true },
  { id: "camisetas", nome: "Camisetas & Regatas", slug: "camisetas", linha: "masculino", ordem: 5, ativa: true },
  { id: "bermudas", nome: "Bermudas", slug: "bermudas", linha: "masculino", ordem: 6, ativa: true },
];

/* paleta da marca: preto, grafite, dourado, azul elétrico, coral, lilás, verde, areia */
const PRETO = "#1b1c1e", GRAFITE = "#4a4d52", OURO = "#f5b324", AZUL = "#2b50ff",
  CORAL = "#ff5a3c", LILAS = "#9b8cf0", VERDE = "#2f6b4f", AREIA = "#cbbfa8";
const PX = ["PP", "P", "M", "G", "GG"];
const MASC = ["P", "M", "G", "GG", "XG"];

const base = {
  ativo: true,
  tamanhos: PX,
  descricao:
    "Tecido de alta compressão, com secagem rápida e toque gelado.\nNão fica transparente no agachamento.\nTire dúvidas de tamanho e medidas pelo WhatsApp.",
};

let n = 0;
const p = (o) => ({ id: "demo" + ++n, ordem: n, criadoEm: Date.now() - n * 6e5, ...base, ...o });

export const PRODUTOS_DEMO = [
  p({ nome: "Legging Cós Alto Preta", categoria: "leggings", preco: 119.9, precoAntigo: 159.9, selo: "maisvendido", thumb: peca("legging", PRETO) }),
  p({ nome: "Legging Faixa Lateral Dourada", categoria: "leggings", preco: 129.9, precoAntigo: 0, selo: "novidade", thumb: peca("legging", GRAFITE, OURO) }),
  p({ nome: "Legging Seamless Lilás", categoria: "leggings", preco: 139.9, precoAntigo: 0, thumb: peca("legging", LILAS) }),
  p({ nome: "Legging Compressão Verde", categoria: "leggings", preco: 109.9, precoAntigo: 149.9, thumb: peca("legging", VERDE) }),

  p({ nome: "Top Alça Dupla Preto", categoria: "tops", preco: 69.9, precoAntigo: 0, selo: "maisvendido", thumb: peca("top", PRETO) }),
  p({ nome: "Top Nadador Coral", categoria: "tops", preco: 64.9, precoAntigo: 89.9, thumb: peca("top", CORAL) }),
  p({ nome: "Top Alta Sustentação Azul", categoria: "tops", preco: 79.9, precoAntigo: 0, selo: "novidade", thumb: peca("top", AZUL) }),
  p({ nome: "Top Faixa Dourada", categoria: "tops", preco: 59.9, precoAntigo: 79.9, selo: "ultimas", tamanhos: ["P", "M"], thumb: peca("top", GRAFITE, OURO) }),

  p({ nome: "Conjunto Top + Legging Preto", categoria: "conjuntos", preco: 179.9, precoAntigo: 239.9, selo: "maisvendido", thumb: peca("conjunto", PRETO) }),
  p({ nome: "Conjunto Seamless Lilás", categoria: "conjuntos", preco: 199.9, precoAntigo: 0, selo: "novidade", thumb: peca("conjunto", LILAS) }),
  p({ nome: "Conjunto Areia Faixa Coral", categoria: "conjuntos", preco: 189.9, precoAntigo: 0, thumb: peca("conjunto", AREIA, CORAL) }),

  p({ nome: "Short Biker Preto", categoria: "shorts", preco: 69.9, precoAntigo: 0, thumb: peca("short", PRETO) }),
  p({ nome: "Short Compressão Azul", categoria: "shorts", preco: 74.9, precoAntigo: 99.9, thumb: peca("short", AZUL) }),
  p({ nome: "Short Faixa Dourada", categoria: "shorts", preco: 79.9, precoAntigo: 0, selo: "novidade", thumb: peca("short", GRAFITE, OURO) }),

  p({ nome: "Camiseta Dry Fit Preta", categoria: "camisetas", preco: 79.9, precoAntigo: 0, selo: "maisvendido", tamanhos: MASC, thumb: peca("camiseta", PRETO) }),
  p({ nome: "Camiseta Dry Fit Azul", categoria: "camisetas", preco: 79.9, precoAntigo: 99.9, tamanhos: MASC, thumb: peca("camiseta", AZUL) }),
  p({ nome: "Regata Cavada Grafite", categoria: "camisetas", preco: 59.9, precoAntigo: 0, tamanhos: MASC, thumb: peca("regata", GRAFITE, OURO) }),
  p({ nome: "Regata Treino Verde", categoria: "camisetas", preco: 54.9, precoAntigo: 69.9, selo: "ultimas", tamanhos: ["M", "G"], thumb: peca("regata", VERDE) }),

  p({ nome: "Bermuda Treino Preta", categoria: "bermudas", preco: 89.9, precoAntigo: 0, tamanhos: MASC, thumb: peca("bermuda", PRETO) }),
  p({ nome: "Bermuda 2 em 1 Grafite", categoria: "bermudas", preco: 109.9, precoAntigo: 139.9, selo: "novidade", tamanhos: MASC, thumb: peca("bermuda", GRAFITE, CORAL) }),
];
