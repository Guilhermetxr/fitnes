/* ============================================================
   CONFIGURAÇÃO DO PROJETO
   ------------------------------------------------------------
   1) Crie um projeto em https://console.firebase.google.com
   2) Ative  Authentication > Sign-in method > E-mail/senha
   3) Ative  Firestore Database (modo produção)
   4) Em "Configurações do projeto > Seus apps > Web", copie o
      objeto de configuração e cole abaixo, no lugar dos "COLE_AQUI".

   Enquanto os campos não forem preenchidos, o site roda em
   MODO DEMONSTRAÇÃO: os dados ficam salvos apenas no navegador
   (localStorage) e servem para testar o layout e o painel.
   ============================================================ */

export const firebaseConfig = {
  apiKey: "AIzaSyC7w6hOScGxCLf_sZddv8ORUlkiIUestBs",
  authDomain: "fitnes-ca41d.firebaseapp.com",
  projectId: "fitnes-ca41d",
  storageBucket: "fitnes-ca41d.firebasestorage.app",
  messagingSenderId: "251769922844",
  appId: "1:251769922844:web:fdba3e8299c545c22486d9",
  measurementId: "G-CL3FWKWJRY"
};

/* Versão do SDK do Firebase carregada via CDN. */
export const FIREBASE_VERSION = "11.0.2";

/* Senha usada apenas no MODO DEMONSTRAÇÃO (sem Firebase configurado).
   Com o Firebase ativo, o login passa a ser o de verdade (e-mail + senha). */
export const DEMO_SENHA = "ilha123";

/* Valores usados quando ainda não há nada salvo em "config/loja". */
export const CONFIG_PADRAO = {
  nome: "Ilha Imports",
  slogan: "A Ilha Imports é sua, é única!",
  whatsapp: "5500000000000", // formato: 55 + DDD + número (só dígitos) — trocar pelo WhatsApp real
  mensagemPadrao: "Olá! Vi o catálogo da Ilha Imports e queria saber mais sobre:",
  instagram: "https://www.instagram.com/ilhaimports8",
  avisos: [
    "ENTREGA EM ATÉ 1H EM SÃO LUÍS",
    "AS MELHORES MARCAS AQUI",
    "LJ 06, NEW CENTER – MARANHÃO NOVO",
    "PEÇA PELO WHATSAPP",
  ],
  heroTitulo: "Moda fitness de marca",
  heroTexto:
    "Leggings, tops, conjuntos e roupas de treino pra elas e pra eles. Escolha a peça, chame no WhatsApp e receba em até 1h em São Luís.",
  rodapeTexto:
    "Ilha Imports — Lj 06, New Center, Maranhão Novo, São Luís/MA. Preços e disponibilidade sujeitos a alteração — confirme no WhatsApp antes de fechar o pedido.",
};

/* Quantos produtos aparecem por vez. A ideia é nunca despejar o
   estoque inteiro de uma vez: a home mostra uma amostra por seção
   e a página da categoria carrega aos poucos. */
export const LIMITE_HOME = 8;
export const LIMITE_PAGINA = 12;