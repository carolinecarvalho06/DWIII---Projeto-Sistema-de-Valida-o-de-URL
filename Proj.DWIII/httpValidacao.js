import fetch from 'node-fetch';
import chalk from 'chalk';

function traduzStatus(status) {
  switch (status) {
    case 200:
      return chalk.green("Site no ar e operante!");
    case 400:
    case 404:
      return chalk.red("Página não encontrada.");
    case 500:
      return chalk.yellow("Erro interno no servidor do site.");
    default:
      return chalk.yellow(`Status desconhecido: ${status}`);
  }
}

export async function validarLinks(listaLinks) {
  const resultados = [];

  for (const link of listaLinks) {
    try {
      const response = await fetch(link.url);
      const mensagem = traduzStatus(response.status);

      resultados.push({
        url: link.url,
        status: response.status,
        mensagem
      });

    } catch (erro) {
      resultados.push({
        url: link.url,
        status: "ERRO",
        mensagem: chalk.red("Domínio inexistente ou erro de rede.")
      });
    }
  }

  return resultados;
}