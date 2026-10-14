/* Aparência compartilhada pela vitrine e pela prévia do painel. */
export const CORES = {
  brand: ["Cor principal", "#2b50ff"],
  accent: ["Destaques", "#d4380f"],
  bg: ["Fundo", "#f2f2ee"],
  surface: ["Cards e menus", "#ffffff"],
  txt: ["Textos", "#141614"],
};
export function coresValidas(cores = {}) {
  return Object.fromEntries(Object.entries(CORES).map(([chave, [, padrao]]) =>
    [chave, /^#[0-9a-f]{6}$/i.test(cores?.[chave]) ? cores[chave] : padrao]));
}
export function aplicarCores(cores, alvo = document.documentElement) {
  const c = coresValidas(cores);
  for (const [chave, valor] of Object.entries(c)) alvo.style.setProperty(`--${chave}`, valor);
  for (const [chave, valor] of Object.entries({
    "brand-2": c.brand, "bg-2": c.bg, "surface-2": c.surface,
    "txt-2": c.txt, "txt-3": c.txt,
    "line": `${c.txt}29`, "line-2": `${c.txt}4d`,
  })) alvo.style.setProperty(`--${chave}`, valor);
  const rgb = c.brand.slice(1).match(/../g).map(v => parseInt(v, 16) / 255)
    .map(v => v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
  const luminancia = rgb[0] * .2126 + rgb[1] * .7152 + rgb[2] * .0722;
  alvo.style.setProperty("--brand-ink", luminancia > .179 ? "#181818" : "#ffffff");
}
export function imagemBanner(valor) {
  return typeof valor === "string" && (/^data:image\/(jpeg|png|webp);base64,[a-z0-9+/=]+$/i.test(valor) || valor === "img/banner.svg")
    ? valor : "img/banner.svg";
}
