# Valor de envio

Valor de envio, ou frete, é o valor praticado para envio dos produtos vendidos. Se este valor já está definido, é possível exibi-lo separado do valor total da compra no momento do pagamento.

1. Envie um POST com os atributos `cost` e `mode` do parâmetro `shipments` ao endpoint [/checkout/preferences](/developers/pt/reference/preferences/_checkout_preferences/post).
2. Em `cost`,  insira o valor do frete.
3. Em `mode`, insira `not_specified`.
4. Execute a requisição.

```json
{
    "shipments":{
        "cost": 1000,
        "mode": "not_specified",
  }
}
```