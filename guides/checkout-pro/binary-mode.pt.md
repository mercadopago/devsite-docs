# Modo binário

É possível ativar o modo binário se o modelo de negócios exigir que a aprovação do pagamento seja instantânea. Dessa forma, o pagamento só poderá ser aprovado ou recusado.

Se estiver desativado, o pagamento poderá ficar pendente (no caso de exigir qualquer ação do comprador) ou em processo (se for necessária uma revisão manual).


> NOTE
>
> Importante
>
> A ativação do modo binário simplifica a integração com o Checkout Pro, mas pode acarretar no decréscimo da taxa de porcentagem de pagamentos aprovados. Isto porque, para manter o fluxo instantâneo, pagamentos pendentes ou ainda sendo processados serão por padrão automáticamente rejeitados.


Para ativar o modo binário, envie o parâmetro "binary_mode"  com o valor `true` ao endpoint [/checkout/preferences](/developers/pt/reference/preferences/_checkout_preferences/post) e execute a requisição conforme indicado no exemplo abaixo.


```json
"binary_mode": true
```
