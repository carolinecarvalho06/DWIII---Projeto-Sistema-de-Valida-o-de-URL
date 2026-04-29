import fs from 'fs/promises';

// regex para pegar links em markdown
const regexLinks = /(https?:\/\/[^\s]+)/gm;

export async function extrairLinks(caminho) {
  try {
    const texto = await fs.readFile(caminho, 'utf-8');
    return capturaLinks(texto);
  } catch (erro) {
    throw new Error(`Erro ao ler o arquivo: ${erro.message}`);
  }
}

function capturaLinks(texto) {
  const resultados = [];
  let match;

  while ((match = regexLinks.exec(texto)) !== null) {
    resultados.push({ texto: match[1], url: match[2] });
  }

  return resultados;
}