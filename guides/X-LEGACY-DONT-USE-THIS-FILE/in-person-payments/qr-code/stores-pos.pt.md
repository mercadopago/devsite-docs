# Lojas e Caixas

## Introdução

As **lojas** e **caixas** são os conceitos que você usará no Mercado Pago para gerenciar seus negócios e manter um registro das suas contas. Você pode ter vários caixas dentro de uma loja.

![Cajas y Sucursales](/images/mobile/stores_pos.pt.png) 

## Lojas

É um **estabelecimento físico** onde seus clientes podem adquirir seus produtos ou serviços. Você pode ter várias lojas numa mesma conta.

### Quais são os benefícios de criar lojas?

Os benefícios de criar lojas são:

- **Conseguir traçabilidade**. Cada pagamento ficará associado a uma loja e no momento de obter seus relatórios de conciliação será valioso para identificar transações por loja. 
- **Visibilidade em mapas de lojas**.  As lojas criadas aparecem no mapa dos app de Mercado Pago ou Mercado Livre à medida que forem tendo pagamentos. Assim, conferem visibilidade a todos os clientes sobre a existência da loja. 
- **Aportar uma melhor organização dos caixas**. 

### Como criar uma loja?

Para criar uma loja, você tem que declarar seu nome, horários de trabalho, localização e alguma referência que o identifique. 

Para gerá-la, execute o código a seguir: 

[[[
 ```curl
curl -X POST \
-H 'Authorization: Bearer PROD_ACCESS_TOKEN' \
https://api.mercadopago.com/users/$USER_ID/stores \
-d \
{  
   "name":"Loja Instore",
   "business_hours":{  
      "monday":[  
         {  
            "open":"08:00",
            "close":"13:00"
         },
         {  
            "open":"15:00",
            "close":"18:00"
         }
      ],
      "tuesday":[  
         {  
            "open":"08:00",
            "close":"18:00"
         }
      ]   
   },
   "location":{  
      "street_number":"3039",
      "street_name":"Caseros",
      "city_name":"Belgrano",
      "state_name":"Capital Federal",
      "latitude":-32.8897322,
      "longitude":-68.8443275,
      "reference":"3er Piso"
   },
   "external_id":"STORE001"
}
```
]]]

Você pode obter mais informações nas [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/stores/_users_user_id_stores/post).

> WARNING
>
> Importante
>
> 1. Você deve saber o `country_id` do país onde você está em [nossa API de países](https://api.mercadolibre.com/countries).
> 2. O `state_name` deve corresponder aos **estados** de acordo com o país em questão (https://api.mercadolibre.com/countries/$country_id).
> 3. O `city_name` deve corresponder às **cidades** de acordo com seus estados. (https://api.mercadolibre.com/states/$state_id).

## Caixas

É um **ponto de venda** que existe numa sucursal ou loja física. Cada caixa terá um código QR unívoco vinculado.

### Como criar uma caixa?

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

---
### Próximos passos


> LEFT_BUTTON_RECOMMENDED_PT
>
> Integrar o modelo QR atendido
>
> Aprenda passo a passo como integrar este modelo.
>
> [Integrar o modelo QR atendido](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/in-person-payments/qr-code/qr-attended/introduction)

> RIGHT_BUTTON_RECOMMENDED_PT
>
> Integrar o modelo QR dinâmico
>
> Oferece a opção de pagar com o valor a ser cobrado já incluído no código QR.
>
> [Integrar o modelo QR dinâmico](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/in-person-payments/qr-code/qr-dynamic/introduction)
