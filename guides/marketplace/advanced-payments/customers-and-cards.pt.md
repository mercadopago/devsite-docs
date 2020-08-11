---
sites_supported:
  - mla
  - mlb
  - mlm
  - mlc
  - mpe
---

# Pagamentos com clientes e cartões guardados

A API de Advanced Payments permite realizar pagamentos com clientes e cartões guardados para integradores que trabalhem com este modelo de negócio.

> NOTE
>
> Nota
>
> Ver referência de [Customers & Cards](https://www.mercadopago.com.br/developers/pt/guides/payments/api/advanced-integration/) para maiores informações.

Para criar um pagamento usando `Customers`, deve-se atribuir o ID do cliente e o tipo com o valor `customer`.


```json
{
  "payer": {
    "id": "213693707-b2i8UYRe5h9NQv",
    "type": "customer"
  },
  ...
}
```
