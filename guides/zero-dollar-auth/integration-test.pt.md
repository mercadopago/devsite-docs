# Validação de integração

Para verificar se a sua integração Zero Dollar Auth é válida, leve em consideração as seguintes recomendações.

## Adicionar cabeçalho "X-Test-Token: true"

Para todos os curls de token de cartão, é importante adicionar o cabeçalho **X-Test-Token: true**. Isso indicará à API que ela deve processar o consumo de ZDA no ambiente de testes (Sandbox).

## Simular aprovações e rejeições nos testes

Para simular aprovações, utilize o cartão específico `4074090000000004` no curl do endpoint [/v1/payments](/developers/pt/docs/zero-dollar-auth/integration). 

Para simular rejeições, use qualquer outro cartão de teste.

## Realizar transações com dados do cartão abertos

Para poder realizar transações com os dados do cartão abertos, diretamente na chamada da API, é necessário que o vendedor seja [PCI Compliant](/developers/pt/docs/security/pci). Caso contrário, esses dados não podem ser transacionados no back-end da sua aplicação.