# Teste de integração

## Adicionar cabeçalho "X-Test-Token: true"

Para todos os curls de token de cartão, é importante adicionar o cabeçalho **X-Test-Token: true**, indicando ao Payments para processar o consumo de ZDA no ambiente de SandBox. Para aprovações, utilize o cartão específico `4074090000000004` no curl de token de cartão. Para simular rejeições, use qualquer outro cartão de teste.

## Realizar transações com dados do cartão abertos

Para poder realizar transações com os dados do cartão abertos, é necessário que o vendedor seja [PCI Compliant](/developers/es/docs/security/pci). Caso contrário, esses dados não podem ser transacionados no back-end da sua aplicação.