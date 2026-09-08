# Entre Nós — Finanças

Aplicativo web para demonstração e organização local de despesas. Tema preto com gráficos e ícones coloridos, metas, orçamento, repetição mensal e consulta de histórico importado.

## iPhone

Abra o endereço do GitHub Pages no Safari, toque em Compartilhar → Adicionar à Tela de Início e mantenha Abrir como App ativado, se aparecer. Abra pelo novo ícone. Em Minha planilha, importe seu arquivo JSON privado e confira a prévia antes de confirmar.

A instalação é um web app, não uma publicação na App Store. O cache permite abrir os arquivos do app após o primeiro acesso online; fontes externas podem usar a alternativa do sistema offline.

## Dados pessoais

Este repositório contém apenas código e exemplos. A planilha original e o arquivo privado de importação não devem ser enviados ao GitHub. Minha planilha salva o histórico no navegador do aparelho, separado da demonstração. Não existe sincronização, login ou backup automático. Use Exportar cópia pessoal e guarde o arquivo em local privado. O armazenamento local não é criptografado pelo app; apagar os dados do navegador pode apagar o histórico.

Categorias sugeridas não são classificações recuperadas da planilha. Campos ausentes permanecem ausentes. Os totais do histórico são somas documentais, não saldo bancário conciliado. Registros incompletos ou potencialmente duplicados exigem revisão.

## Desenvolvimento

Execute `node server.mjs` e abra http://127.0.0.1:4173.

Testes: `node --test finance.test.mjs planning.test.mjs history.test.mjs`.

## Limites atuais

Cartões com conciliação de fatura, parcelas completas, integração Open Finance e captura via Atalhos ainda não estão implementados. Não há leitura automática de Apple Pay. A tela principal mantém dados de demonstração; o histórico pessoal está em Minha planilha.
