# DWIII---Projeto-Sistema-de-Valida-o-de-URL

## 🌐 Validador de Links CLI

Uma ferramenta de linha de comando (CLI) desenvolvida em Node.js para validar URLs de forma rápida e amigável.
Ela verifica se um site está disponível e traduz os códigos HTTP em mensagens claras para o usuário.

### ✨ Funcionalidades
* Validação de URLs individuais
* Leitura de arquivos .txt ou .md com múltiplos links
* Saída colorida no terminal com Chalk
* Requisições HTTP com node-fetch
* Tratamento de erros (DNS, conexão, etc.)
* Tradução de status HTTP para mensagens humanas

### 📁 Estrutura do Projeto
* 📦 validador-links
*  ┣ 📜 cli.js              # Interface com o usuário (entrada via terminal)
*  ┣ 📜 leitor.js           # Leitura de arquivos e extração de URLs
*  ┣ 📜 httpValidacao.js    # Validação HTTP e regras de negócio
*  ┗ 📜 README.md

### Desenvolvido por:
* Alunas: Priscila de Carvalho Mendes e Caroline de Carvalho Mendes
* RAs: 2171392511039 e 2171392511041
* Curso: Desenvolvimento de Software Multiplataforma
* Disciplina: Desenvolvimento Web III
* Instituição: FATEC Diadema
* Data: 29/04/2026
