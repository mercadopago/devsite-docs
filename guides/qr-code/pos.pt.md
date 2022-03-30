# Caixas

É um **ponto de venda** que existe numa sucursal ou loja física. Cada caixa terá um código QR unívoco vinculado.

## Como criar uma caixa?

Tendo lojas criadas, você pode criar seus caixas. Considere o seguinte: 

| Termo | Descrição |
| --- | --- |
| `EXTERNAL_STORE_ID` | Vincula o caixa com a loja. É um campo requerido e é o mesmo *external_id* da loja previamente criada. |
| `EXTERNAL_ID` | Identifica univocamente cada caixa. É requerido e não se pode alterar nem repetir numa mesma conta de Mercado Pago. |


[[[
 ```curl
curl -X POST \
-H 'Authorization: Bearer PROD_ACCESS_TOKEN' \
https://api.mercadopago.com/pos \
-d \    
{
  "name":"Caixa Principal", 
  "fixed_amount": true,
  "category": 621102,
  "external_store_id": "STORE001",
  "external_id": "CAIXA0001"
}
```
]]]

Você pode obter mais informações em [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/pos/_pos/post).

> WARNING 
> 
> Importante
> 
> A partir de 20 de abril de 2021, os caixas não poderão ser criados sem uma loja atribuída.

Uma vez criado o caixa, poderemos ver no _Response_ os links para diferentes entregáveis do QR, junto com outros dados relevantes do caixa. 
