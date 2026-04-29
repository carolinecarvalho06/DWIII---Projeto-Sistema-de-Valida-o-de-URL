#!/usr/bin/env node

import chalk from 'chalk';
import { extrairLinks } from './leitor.js';
import { validarLinks } from './httpValidacao.js';

async function processarEntrada() {
  const argumento = process.argv[2];

  if (!argumento) {
    console.log(chalk.red("❌ Você precisa passar uma URL ou arquivo."));
    return;
  }

  try {
    // Se for um link direto
    if (argumento.startsWith("http")) {
      const resultado = await validarLinks([{ url: argumento }]);
      mostrarResultado(resultado);

    } else {
      // Se for arquivo
      const links = await extrairLinks(argumento);

      if (links.length === 0) {
        console.log(chalk.yellow("⚠️ Nenhum link encontrado no arquivo."));
        return;
      }

      const resultado = await validarLinks(links);
      mostrarResultado(resultado);
    }

  } catch (erro) {
    console.log(chalk.red("Erro geral:", erro.message));
  }
}

function mostrarResultado(resultados) {
  resultados.forEach(res => {
    console.log(`
 ${res.url}
 Status: ${res.status}
 ${res.mensagem}
`);
  });
}

processarEntrada();