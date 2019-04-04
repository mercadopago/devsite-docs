# Pagamentos binários

É possível definir o pagamento para que a resposta seja instantânea ou não.

Caso seja instantânea, a resposta do pagamento será `approved` ou `rejected` (sem estados intermediários). Caso contrário, o pagamento poderá ficar em estado pendente esperando, por exemplo, a acreditação do pagamento no caso de Meios off-line ou pagamentos com cartão de crédito de valores elevados onde o Comprador deve entrar em contato com a administradora do cartão para autorizar o pagamento.

É possível manejar essa lógica atribuindo, na raiz do Advanced Payment, o campo `binary_mode` em `true` para que devolva a resposta imediata e `false` para o contrário.

```json
  "binary_mode": true
```
